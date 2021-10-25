
CREATE TABLE Users (
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    is_seller BOOLEAN NOT NULL,
    balance FLOAT NOT NULL CHECK(balance >= 0.0),
    address VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    price FLOAT NOT NULL CHECK(price >= 0.0),
    available_quantity INT CHECK(available_quantity >= 0),
    inventory_status BOOLEAN NOT NULL,
    category VARCHAR(255) NOT NULL,
    image_id INT
);

CREATE TABLE CartItem (
    id INT NOT NULL,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK(quantity >= 0),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    PRIMARY KEY (id, user_id, product_id)
);

CREATE TABLE OrderItem (
    id INT NOT NULL,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK(quantity >= 0),
    final_price INT NOT NULL CHECK(final_price >= 0.0),
    time_stamp timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    fulfillment_status BOOLEAN NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    PRIMARY KEY (id, user_id, product_id)
);

CREATE TABLE SavedItem (
    id INT NOT NULL,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    PRIMARY KEY (id, user_id, product_id)
);

CREATE TABLE Messages (
    from_id INT NOT NULL,
    to_id INT NOT NULL,
    order_id INT NOT NULL,
    time_stamp timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    text VARCHAR(255) NOT NULL,
    FOREIGN KEY (from_id) REFERENCES Users(id),
    FOREIGN KEY (to_id) REFERENCES Users(id),
    FOREIGN KEY (order_id) REFERENCES OrderItem(id),
    PRIMARY KEY (from_id, to_id, order_id, time_stamp)
);

CREATE TABLE SellerReview (
    from_id INT NOT NULL,
    to_id INT NOT NULL,
    time_stamp timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    text VARCHAR(255) NOT NULL,
    numDownVotes INT NOT NULL CHECK(numDownVotes >= 0),
    numUpVotes INT NOT NULL CHECK(numUpVotes >= 0),
    numStars INT NOT NULL CHECK(numStars >= 0),
    FOREIGN KEY (from_id) REFERENCES Users(id),
    FOREIGN KEY (to_id) REFERENCES Users(id),
    PRIMARY KEY (from_id, to_id)
);

CREATE TABLE ProductReview (
    from_id INT NOT NULL,
    product_id INT NOT NULL,
    time_stamp timestamp without time zone NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
    text VARCHAR(255) NOT NULL,
    numDownVotes INT NOT NULL CHECK(numDownVotes >= 0),
    numUpVotes INT NOT NULL CHECK(numUpVotes >= 0),
    numStars INT NOT NULL CHECK(numStars >= 0),
    FOREIGN KEY (from_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    PRIMARY KEY (from_id, product_id)
);

CREATE FUNCTION TF_USER_ID() RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (SELECT * FROM Users WHERE email=NEW.email AND id<>NEW.id) THEN
        RAISE EXCEPTION '(%) CANNOT CHANGE USER ID', NEW.name;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TG_USER_ID
    BEFORE UPDATE ON Users
    FOR EACH ROW
EXECUTE PROCEDURE TF_USER_ID();

CREATE FUNCTION TF_USER_BALANCE() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.balance <> 0 THEN
        RAISE EXCEPTION '(%) CANNOT HAVE A STARTING BALANCE NOT EQUAL TO ZERO', NEW.name;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TG_USER_BALANCE
    BEFORE INSERT ON Users
    FOR EACH ROW
EXECUTE PROCEDURE TF_USER_BALANCE();

CREATE FUNCTION TF_ORDER_UPDATE() RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'CANNOT UPDATE ORDER (%)', NEW.id;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TG_ORDER_UPDATE
    BEFORE UPDATE ON OrderItem
    FOR EACH ROW
EXECUTE PROCEDURE TF_ORDER_UPDATE();

CREATE FUNCTION TF_SELLER_REVIEW() RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (SELECT * FROM SellerReview WHERE from_id=NEW.from_id AND to_id=NEW.to_id) THEN
        RAISE EXCEPTION 'CANNOT SUBMIT MULTIPLE SELLER REVIEWS';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TG_SELLER_REVIEW
    BEFORE INSERT ON SellerReview
    FOR EACH ROW
EXECUTE PROCEDURE TF_SELLER_REVIEW();

CREATE FUNCTION TF_PRODUCT_REVIEW() RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (SELECT * FROM ProductReview WHERE from_id=NEW.from_id AND product_id=NEW.product_id) THEN
        RAISE EXCEPTION 'CANNOT SUBMIT MULTIPLE PRODUCT REVIEWS';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TG_PRODUCT_REVIEW
    BEFORE INSERT ON ProductReview
    FOR EACH ROW
EXECUTE PROCEDURE TF_PRODUCT_REVIEW();
