// Login queries

const userlogin = 'SELECT id, Users FROM tbl_users WHERE Username = ? AND Password = ?';


// get queries
 const courses = 'SELECT * FROM tbl_courses';
 const teacher = 'Select * FROM tbl_teachers ORDER By teacher_id DESC';
 const user = 'SELECT * FROM tbl_users ORDER By id DESC';
 const update_edit = 'Select * FROM tbl_teachers WHERE teacher_id = ?';
 const video_detail = 'SELECT * FROM tbl_videos';
 const notesgeting = 'Select * FROM tbl_notes WHERE user_id = ?';

 //update queries

 const updteacher = 'UPDATE tbl_teachers SET teacher_Name = ?, teacher_Exp = ?, teacher_email = ?, teacher_catg = ?, teacher_join_date = NOW() WHERE teacher_id = ?';

 //post queries

 const courseadd = 'INSERT INTO tbl_courses( `course_catg`, `course_name`, `total_video`, `course_rel_date`, `course_dur_time`) VALUES (?)';

// Video upload queries

const videoupload = 'INSERT INTO tbl_videos( `video_title`, `video_realname`,`video_path`, `video_filename` , `video_size`) VALUES(?)';

 // Notes with the User Geting 

 const Noteupload = 'INSERT INTO tbl_notes( `notes_tle`, `note_paragh` , `user_id` ) VALUES (?)';


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
    notesgeting
    
}