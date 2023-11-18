// Login queries

const userlogin = 'SELECT id, Users FROM tbl_users WHERE Username = ? AND Password = ?';
const teacherlogin = 'SELECT teacher_id, teacher_Name , status FROM tbl_teachers WHERE teacher_email = ? AND teacher_password = ?'


// get queries
 const courses = 'SELECT * FROM tbl_courses';
 const teacher = 'Select * FROM tbl_teachers ORDER By teacher_id DESC';
 const user = 'SELECT * FROM tbl_users ORDER By id DESC';
 const update_edit = 'Select * FROM tbl_teachers WHERE teacher_id = ?';
 const video_detail = 'SELECT * FROM tbl_videos';
 const notesgeting = 'Select * FROM tbl_notes WHERE user_id = ?';
 const coursedetail = 'Select course_id , course_name FROM tbl_courses';
 const Videopara = 'Select * FROM tbl_videos WHERE video_teacher_id = ? AND video_course_id = ?';
 

 //update queries

 const updteacher = 'UPDATE tbl_teachers SET teacher_Name = ?, teacher_Exp = ?, teacher_email = ?, teacher_catg = ?, teacher_join_date = NOW() WHERE teacher_id = ?';

 const updusers = 'UPDATE tbl_users SET Username = ?, Password = ?, Users = ?, user_status = ?, mobile_number = ?, city = ?, gender = ?, WHERE id = ?';

 //UserSignup

 const usersignup = " INSERT INTO tbl_users (`Username`, `Password`, `Users`, `user_status`, `mobile_number`, `city`, `gender`, `user_relig`, `user_ethnicity`, `user_date`) VALUES (?)";

 //Teacher Signup 

const teachersignup = "INSERT INTO tbl_teachers(`teacher_Name`, `teacher_Exp`, `teacher_email`, `teacher_password`, `teacher_catg`, `teacher_join_date`,  `status`) VALUES (?)";

 //post queries

 const courseadd =  "INSERT INTO tbl_courses( `course_img`, `course_name`, `total_video`, `course_rel_date`, `course_dur_time`, `course_teacher_id`, `status`) VALUES (?)";

// Video upload queries

const videoupload = 'INSERT INTO tbl_videos( `video_title`, `video_realname`,`video_path`, `video_filename` , `video_size` , `video_teacher_id`, `video_despt`, `video_course_id`) VALUES(?)';

 // Notes with the User Geting 

 const Noteupload = 'INSERT INTO tbl_notes( `notes_tle`, `note_paragh` , `user_id` ) VALUES (?)';

 //Add Teacher and Course detail

 const TeachCourse = 'INSERT INTO tbl_courses_teachers (`course_id`, `teacher_id`) VALUES (?)';
 
//JOIN FOR TEACHER AND COURSE
const sltteachcourse = 'SELECT ct.*, t.*,c.* FROM `tbl_courses_teachers` ct  inner join tbl_teachers t on t.teacher_id = ct.teacher_id inner join tbl_courses c on c.course_id = ct.course_id where ct.course_id = ?;'
module.exports = {
    courses,
    teacher,
    user,
    updteacher,
    update_edit,
    courseadd,
    videoupload,
    video_detail,
    Noteupload,
    userlogin,
    notesgeting,
    teachersignup,
    usersignup,
    coursedetail,
    teacherlogin,
    Videopara,
    TeachCourse,
    sltteachcourse,
    updusers
    
}