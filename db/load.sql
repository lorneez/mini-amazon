\COPY Users FROM '~/mini-amazon/db/data/Users.csv' WITH DELIMITER ',' NULL '' CSV
\COPY Products FROM '~/mini-amazon/db/data/Products.csv' WITH DELIMITER ',' NULL '' CSV
\COPY OrderItem FROM '~/mini-amazon/db/data/OrderItem.csv' WITH DELIMITER ',' NULL '' CSV
\COPY SavedItem FROM '~/mini-amazon/db/data/SavedItem.csv' WITH DELIMITER ',' NULL '' CSV
\COPY CartItem FROM '~/mini-amazon/db/data/CartItem.csv' WITH DELIMITER ',' NULL '' CSV
\COPY ProductReview FROM '~/mini-amazon/db/data/ProductReview.csv' WITH DELIMITER ',' NULL '' CSV
