import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'; 
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx'
import WatsssapIcons from './components/WatsssapIcons.jsx';



 export default function App() {

//    const [cursor, setCursor] = useState({ x: 0, y: 0 });
//    const [follower, setFollower] = useState({ x: 0, y: 0, vx: 0, vy: 0 });

//    useEffect(() => {
//      const cursorEl = document.getElementById("cursor");
//      const cursorFollower = document.getElementById("cursor-follower");

//      const handleMouseMove = (e) => {
//        const newCursor = { x: e.clientX, y: e.clientY };
//        setCursor(newCursor);

//        cursorEl.style.left = `${newCursor.x}px`;
//        cursorEl.style.top = `${newCursor.y}px`;

//        if (e.target.dataset.cursor === "link") {
//          cursorFollower.classList.add("link-cursor-follower");
//          cursorFollower.classList.remove("default-cursor-follower");

//          cursorEl.classList.add("link-cursor");
//          cursorEl.classList.remove("default-cursor");
//          cursorEl.innerHTML = `<i class="fa fa-${e.target.dataset.cursoricon}"></i>`;
//        } else {
//          cursorFollower.classList.add("default-cursor-follower");
//          cursorFollower.classList.remove("link-cursor-follower");

//          cursorEl.classList.add("default-cursor");
//          cursorEl.classList.remove("link-cursor");
//          cursorEl.innerHTML = "";
//        }
//      };

//      document.addEventListener("mousemove", handleMouseMove);

//      return () => {
//        document.removeEventListener("mousemove", handleMouseMove);
//      };
//    }, []);

//    useEffect(() => {
//      const animate = () => {
//         //Calculate spring force
//        let dx = cursor.x - follower.x;
//        let dy = cursor.y - follower.y;
//        let springForceX = dx * stiffness;
//        let springForceY = dy * stiffness;

//        // Damping
//        let newVx = follower.vx * damping;
//        let newVy = follower.vy * damping;

//        // Apply forces to velocity
//        newVx += springForceX;
//        newVy += springForceY;

//        // Update position
//        let newX = follower.x + newVx;
//        let newY = follower.y + newVy;

//        // Apply position to the state

      
//        setFollower({ x: newX, y: newY, vx: newVx, vy: newVy });
//      };

//      const animationId = requestAnimationFrame(animate);

//      return () => {
//        cancelAnimationFrame(animationId);
//      };
//    }, [cursor, follower]);
   return (
     <>
       {/* <div id="cursor" class="cursor">
         <div class="ring">
           <div>
           </div>
         </div>
         <div class="ring">
           <div>
           </div>
         </div>
       </div> */}
     <RouterProvider router={router} />
       <WatsssapIcons />
      
     </>
   )
 }
