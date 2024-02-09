import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // It means it is liked from before
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      // It's not liked before
      // Insert this course into the liked courses
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("liked");
    }
  }

  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.title} />
        <div>
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLikePlaceholder fontSize="1.75rem" />
            ) : (
              <FcLike fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div>
        <p>{course.title}</p>
        <p>
        {course.description.length > 100 ? course.description.substring(0, 100) : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
