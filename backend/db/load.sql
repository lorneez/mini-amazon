\COPY Users FROM 'data/User.csv' WITH DELIMITER ',' NULL '' CSV
\COPY Products FROM 'data/Product.csv' WITH DELIMITER ',' NULL '' CSV
\COPY OrderItem FROM 'data/Purchases.csv' WITH DELIMITER ',' NULL '' CSV
