// Imports
import Rating from "../rating";

export default function ReviewCard({ review }) {
  return (
    <div className="review-item border-bottom d-flex align-items-center justify-content-between text-light py-2 my-2 ">
      <div className="user-infos d-flex align-items-center gap-2 ">
        <div className="user-avatar">{review.name[0]}</div>
        <div className="user-name">
          <strong>{review.name}</strong>
        </div>
      </div>

      <div className="user-review d-flex align-items-center gap-4">
        <div className="user-text">"{review.text}"</div>
        <div className="user-vote">
          <Rating vote={review.vote} maxVote={5} />
        </div>
      </div>
    </div>
  );
}
