import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './Homepage.js'
import LoginPage from './LoginPage.js';
import RegistrationPage from './RegistrationPage.js';
import HelplinePage from './HelplinePage/HelplinePage.js';
import StudentProfile from './StudentProfile/StudentProfile.js'
import TeacherProfile from './TeacherProfile/TeacherProfile.js'
import AdminPage from './AdminPage/AdminPage.js';
import Chat from './Chat/Chat.js';
import Inboxteacher from './HelplinePage/Inboxteacher.js';
export default function Routepath() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path={`/login/:name`} element={<LoginPage/>}></Route>
        <Route path={`/registration`} element={<RegistrationPage/>}></Route>
        <Route path={`/helpline/:person/:id`} element={<HelplinePage/>}></Route>
        <Route path={`/student/profile/:id`} element={<StudentProfile/>}></Route>
        <Route path={`/teacher/profile/:id`} element={<TeacherProfile/>}></Route>
        <Route path={`/admin/page`} element={<AdminPage/>}></Route>
        <Route path={`/chat/:person/:tid/:sid`} element={<Chat/>}></Route>
        <Route path={`/chat/:person/:tid/:sid`} element={<Chat/>}></Route>
        <Route path={`/inbox/teacher/:id`} element={<Inboxteacher/>}></Route>
       </Routes>
        </BrowserRouter> 
    </div>
  )
}
