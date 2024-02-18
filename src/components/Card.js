
import { FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props) {
    const course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    let str = course.description

    // if(str.length>50)
    // {
    //     str = str.substr(0,150) + "..."
    // }

    function clickHandler() {

        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => 
                prev.filter((cid) => (cid !== course.id))
                
            )
            toast.warning("Course Removed")
        }
        else {
            if (likedCourses.length == 0) {
                setLikedCourses([course.id]);

            }
            else {
                setLikedCourses((prev) => [...prev, course.id])
            }

            toast.success("Course Added");
        }
    }

    return (
        <div className="w-[300px] bg-slate-800 rounded-md overflow-hidden">
            <div>
                <img src={course.image.url} alt="" />
            </div>
            <div>
                <button onClick={clickHandler}>
                   {
                    likedCourses.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder />)
                   }
                </button>
            </div>
            <div>
                <p>{course.title}</p>
            </div>
            <div>
                {
                str.length>130 ? `${str.substr(0,130)}...`:{str}
                }
            </div>


        </div>
    )
}

export default Card;