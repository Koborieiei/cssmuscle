import React from 'react'
import './Testimonial.scss'
const commentDataSet = [
 {
  id: 1,
  userid: 5,
  title: 'Such a life-changing experience. Highly recommended!',
  comment:
   'Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!',
  create_at: new Date(+6),
 },
 {
  id: 2,
  userid: 4,
  title:
   'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
  comment:
   'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.',
  create_at: new Date(+6),
 },
 {
  id: 3,
  userid: 3,
  title: 'An overall wonderful and rewarding experience',
  comment:
   'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
  create_at: new Date(+6),
 },
 {
  id: 4,
  userid: 2,
  title: 'The team was very supportive and kept me motivated',
  comment:
   'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.',
  create_at: new Date(+6),
 },
 {
  id: 1,
  userid: 5,
  title:
   'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
  comment:
   'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
  create_at: new Date(+6),
 },
]

const authorDataSet = [
 {
  id: 1,
  fullname: 'Daniel Clifford',
  verified: true,
  profile: 'https://randomuser.me/api/portraits/men/75.jpg',
 },
 {
  id: 2,
  fullname: 'Jonathan Walters',
  verified: true,
  profile: 'https://randomuser.me/api/portraits/men/74.jpg',
 },
 {
  id: 3,
  fullname: 'Jeanette Harmon',
  verified: true,
  profile: 'https://randomuser.me/api/portraits/men/73.jpg',
 },
 {
  id: 4,
  fullname: 'Patrick Abrams',
  verified: true,
  profile: 'https://randomuser.me/api/portraits/men/72.jpg',
 },
 {
  id: 5,
  fullname: 'Kira Whittle',
  verified: true,
  profile: 'https://randomuser.me/api/portraits/men/71.jpg',
 },
]

export default function Testimonial() {
 const classes = ['isPurple', 'isBlack', 'isWhite', 'isGrey']
 const MultiTestimonailCard = () => {
  const getpostArray = () => {
   const postArray = []
   commentDataSet.map((comment) =>
    postArray.push({
     ...authorDataSet.filter((author) => author.id === comment.userid)[0],
     ...comment,
    })
   )
   return postArray
  }

  const postWithAuthor = getpostArray()
  return postWithAuthor.map((each, index) => (
   <div
    key={index}
    className={`card-item ${
     index === 0
      ? classes[0] + ' ' + index
      : classes[Math.floor(Math.random() * (4 - 1) + 1)] + ' ' + index
    } `}
   >
    <div className="item-header">
     <div
      style={{
       background: `url(${each.profile})`,
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'contain',
      }}
      className="profile-pic"
     ></div>
     <div className="textWrapper">
      <p className="profile-name">{each.fullname}</p>
      <p className="profile-verify">{each.verified && 'Verified Graduate'}</p>
     </div>
    </div>
    <div className="item-content">
     <h2 className="content-title">{each.title}</h2>
     <p className="content-detail">{each.comment}</p>
    </div>
   </div>
  ))
 }

 return (
  <div className="container">
   <div className="card-container">
    <MultiTestimonailCard />
   </div>
  </div>
 )
}
