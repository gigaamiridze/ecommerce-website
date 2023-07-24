import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';
import { RatingContainer, StarsWrapper, ReviewsText } from '../components';
import { IRatingProps } from '../interfaces';

function Rating(props: IRatingProps) {
  const { rating, numReviews } = props;

  return (
    <RatingContainer>
      <StarsWrapper>
        <span>
          {rating >= 1 ? (
            <TiStarFullOutline />
          ) : rating >= 0.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 2 ? (
            <TiStarFullOutline />
          ) : rating >= 1.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 3 ? (
            <TiStarFullOutline />
          ) : rating >= 2.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 4 ? (
            <TiStarFullOutline />
          ) : rating >= 3.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
        <span>
          {rating >= 5 ? (
            <TiStarFullOutline />
          ) : rating >= 4.5 ? (
            <TiStarHalfOutline />
          ) : (
            <TiStarOutline />
          )}
        </span>
      </StarsWrapper>
      <ReviewsText>{numReviews} reviews</ReviewsText>
    </RatingContainer>
  )
}

export default Rating;
