from flask import current_app as app
from backend.app.models.product import Product

class PReviewProd:
    def __init__(self, from_id, rtime, rtext, down, up, stars, pid, pname, pseller, pprice, pquant, pstat, pcat, pimage):
        self.from_id = from_id
        self.post_time = rtime
        self.text = rtext
        self.down_votes = down
        self.up_votes = up
        self.stars = stars
        self.product_id = pid
        self.product_name = pname
        self.product_seller = pseller
        self.product_price = pprice
        self.product_quantity = pquant
        self.product_staus = pstat
        self.product_category = pcat
        self.product_image = pimage  

class PReview:
    def __init__(self, from_id, product_id, time_stamp, review_text, numDownVotes, numUpVotes, numStars):
        self.uid = from_id
        self.pid = product_id
        self.time = time_stamp
        self.text = review_text
        self.down = numDownVotes
        self.up = numUpVotes
        self.stars = numStars

    @staticmethod
    def get(uid, pid):
        rows = app.db.execute('''
SELECT *
FROM ProductReview
WHERE from_id = :uid
AND product_id = :pid
''',
                              uid=uid, pid=pid)
        return PReview(*(rows[0])) if rows is not None else None

# self, from_id, rtime, rtext, down, up, stars, pid, pname, pseller, pprice, pquant, pstat, pcat, pimage
    @staticmethod
    def get_all_for_product(pid):
        rows = app.db.execute('''
SELECT pr.from_id, pr.time_stamp, pr.review_text, pr.numDownVotes, pr.numUpVotes, pr.numStars, p.id, p.name, p.seller_id, p.price, p.available_quantity, p.inventory_status, p.category, p.image_id
FROM ProductReview AS pr
INNER JOIN Products AS p
ON pr.product_id = p.id
WHERE pr.product_id=:pid
ORDER BY numUpVotes DESC, time_stamp DESC
''', pid=pid)
        return [PReviewProd(*row) for row in rows]

    @staticmethod
    def product_review_exists(uid, pid):
        rows = app.db.execute('''
    SELECT *
    FROM ProductReview
    WHERE from_id = :uid 
    AND product_id = :pid
    ''', uid=uid, pid=pid)
        return len(rows)>0

    @staticmethod
    def update_text(uid, pid, text):
        try:
            rows = app.db.execute('''
            UPDATE ProductReview
            SET review_text = :text
            WHERE from_id = :uid 
            AND product_id = :pid
            RETURNING :uid, :pid
            ''', uid=uid, pid=pid, text=text)
            uid, pid = rows[0]
            return PReview.get(uid, pid)
        except Exception:
            return None

    @staticmethod
    def update_stars(uid, pid, stars):
        try:
            rows = app.db.execute('''
            UPDATE ProductReview
            SET numStars = :stars
            WHERE from_id = :uid 
            AND product_id = :pid
            RETURNING :uid, :pid
            ''', uid=uid, pid=pid, stars=stars)
            uid, pid = rows[0]
            return PReview.get(uid, pid)
        except Exception:
            return None

    @staticmethod
    def add_product_review(uid, pid, text, no_stars):
        try:
            rows = app.db.execute("""
INSERT INTO ProductReview(from_id, product_id, review_text, numStars)
VALUES(:uid, :pid, :text, :stars)
RETURNING :uid, :pid
""", uid=uid, pid=pid, text=text, stars=no_stars)
            uid, pid = rows[0]
            return PReview.get(uid, pid)
        except Exception:
            return None

    @staticmethod
    def remove_product_review(uid, pid):
        if PReview.product_review_exists(uid, pid):
            try:
                rows = app.db.execute("""
                DELETE FROM ProductReview
                WHERE from_id=:uid
                AND product_id=:pid
                """, uid=uid, pid=pid)
            except Exception:
                return None