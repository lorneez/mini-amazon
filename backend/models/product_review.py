from flask import current_app as app
from product import Product

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
AND product_id = := pid
''',
                              uid=uid, pid=pid)
        return PReview(*(rows[0])) if rows is not None else None

    @staticmethod
    def get_all_for_product(pid):
        rows = app.db.execute('''
SELECT *
FROM ProductReview
WHERE product_id=:pid
ORDER BY numUpVotes DESCENDING, time_stamp DESCENDING
''', pid=pid)
        return [PReview(*row) for row in rows]

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
            WHERE user_id = :uid 
            AND product_id = :pid
            RETURNING :uid, :pid
            ''', uid=uid, pid=pid, text=text)
            uid, pid = rows[0]
            return PReview.get(uid, pid)
        except Exception:
            return None

    @staticmethod
    def add_product_review(uid, pid, text):
        try:
            rows = app.db.execute("""
INSERT INTO ProductReview(from_id, product_id, review_text)
VALUES(:uid, :pid, :text)
RETURNING :uid, :pid
""", uid=uid, pid=pid, text=text)
            uid, pid = rows[0]
            return PReview.get(uid, pid)
        except Exception:
            return None

    @staticmethod
    def remove_product_review(uid, pid):
        if product_review_exists(uid, pid):
            try:
                rows = app.db.execute("""
                DELETE FROM ProductReview
                WHERE from_id=:uid
                AND product_id=:pid
                """, uid=uid, pid=pid)
            except Exception:
                return None