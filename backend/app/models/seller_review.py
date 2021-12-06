from flask import current_app as app
from backend.app.models.user import User
from backend.app.models.product_review import PReview

class SReviewSeller:
    def __init__(self, from_id, rtime, rtext, down, up, stars, sid, semail, sname, sseller, sbal, saddr):
        self.from_id = from_id
        self.post_time = rtime
        self.text = rtext
        self.down_votes = down
        self.up_votes = up
        self.stars = stars
        self.seller_id = sid
        self.seller_email = semail
        self.seller_name = sname
        self.seller_check = sseller
        self.seller_balance = sbal
        self.seller_address = saddr

class SReview:
    def __init__(self, from_id, seller_id, time_stamp, review_text, numDownVotes, numUpVotes, numStars):
        self.from_id = from_id
        self.to_id = seller_id
        self.time = time_stamp
        self.text = review_text
        self.down = numDownVotes
        self.up = numUpVotes
        self.stars = numStars

    @staticmethod
    def get(uid, sid):
        rows = app.db.execute('''
SELECT *
FROM SellerReview
WHERE from_id = :uid
AND to_id = :sid
''',
                              uid=uid, sid=sid)
        return SReview(*(rows[0])) if rows is not None else None

# self, from_id, rtime, rtext, down, up, stars, pid, pname, pseller, pprice, pquant, pstat, pcat, pimage
    @staticmethod
    def get_all_for_seller(sid):
        rows = app.db.execute('''
SELECT sr.from_id, sr.time_stamp, sr.text, sr.numDownVotes, sr.numUpVotes, sr.numStars, u.id, u.email, u.name, u.is_seller, u.balance, u.address
FROM SellerReview AS sr
INNER JOIN Users AS u
ON sr.to_id = u.id
WHERE sr.to_id=:sid
ORDER BY sr.numUpVotes DESC, sr.time_stamp DESC
''', sid=sid)
        return [SReviewSeller(*row) for row in rows]

#     @staticmethod
#     def product_review_exists(uid, pid):
#         rows = app.db.execute('''
#     SELECT *
#     FROM ProductReview
#     WHERE from_id = :uid 
#     AND product_id = :pid
#     ''', uid=uid, pid=pid)
#         return len(rows)>0

    @staticmethod
    def update_text(uid, sid, text):
        try:
            rows = app.db.execute('''
            UPDATE SellerReview
            SET review_text = :text
            WHERE from_id = :uid 
            AND to_id = :sid
            RETURNING :uid, :sid
            ''', uid=uid, sid=sid, text=text)
            uid, sid = rows[0]
            return SReview.get(uid, sid)
        except Exception:
            return None

    @staticmethod
    def update_stars(uid, sid, stars):
        try:
            rows = app.db.execute('''
            UPDATE SellerReview
            SET numStars = :stars
            WHERE from_id = :uid 
            AND to_id = :sid
            RETURNING :uid, :sid
            ''', uid=uid, sid=sid, stars=stars)
            uid, sid = rows[0]
            return PReview.get(uid, sid)
        except Exception:
            return None

    @staticmethod
    def update_upvote(uid, tid, difference):
        try:
            rows = app.db.execute('''
            UPDATE SellerReview
            SET numUpVotes = numUpVotes + difference
            WHERE from_id = :uid 
            AND to_id = :tid
            RETURNING :uid, :tid
            ''', uid=uid, tid=tid, difference=difference)
            uid, tid = rows[0]
            return SReview.get(uid, tid)
        except Exception:
            return None

    @staticmethod
    def update_downvote(uid, tid, difference):
        try:
            rows = app.db.execute('''
            UPDATE SellerReview
            SET numDownVotes = numDownVotes + difference
            WHERE from_id = :uid 
            AND to_id = :tid
            RETURNING :uid, :tid
            ''', uid=uid, tid=tid, difference=difference)
            uid, tid = rows[0]
            return SReview.get(uid, tid)
        except Exception:
            return None

    @staticmethod
    def add_seller_review(uid, sid, text, stars):
        try:
            rows = app.db.execute("""
INSERT INTO SellerReview(from_id, to_id, review_text, numStars)
VALUES(:uid, :sid, :text, :stars)
RETURNING :uid, :sid
""", uid=uid, sid=sid, text=text, stars=stars)
            uid, sid = rows[0]
            return SReview.get(uid, sid)
        except Exception:
            return None

    @staticmethod
    def remove_seller_review(uid, tid):
        try:
            rows = app.db.execute("""
            DELETE FROM ProductReview
            WHERE from_id=:uid
            AND to_id=:tid
            RETURNING :uid, :tid
            """, uid=uid, tid=tid)
            return rows[0]
        except Exception:
            return None