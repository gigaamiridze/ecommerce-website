import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';
import { RatingContainer, StarsWrapper } from '../components';
import { IRatingProps } from '../interfaces';
import { Heading } from '../layouts';

function Rating(props: IRatingProps) {
  const { rating, numReviews } = props;

  return (
    <RatingContainer>
      {rating && (
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
      )}
      <Heading title={`${numReviews} reviews`} type={5} />
    </RatingContainer>
  )
}

export default Rating;
