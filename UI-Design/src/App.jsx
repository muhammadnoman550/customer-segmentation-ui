import React from 'react'
import Section_1 from './Section-01/Section_1.jsx'
import Section_2 from './Section-02/Section_2.jsx'
const App = () => {
  const user =[
    { img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Customers who are satisfied with our services, enjoy a smooth booking experience, and are likely to continue using our platform.',
      color:'blue',
       tag:'Satisfied'
    },
    { img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Customers who face limited access to booking services or unmet needs, creating opportunities to improve their overall experience.',
      color:'black',
       tag:'Underserved'
    },
    { img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Customers who experience an average level of satisfaction and may benefit from better services, personalized offers, and improved booking options.',
      color:'Orange',
       tag:'Average'
      },
      ,
    { img:'https://images.unsplash.com/photo-1758876203420-1ed6db481d4f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Returning customers who consistently choose our platform, value our services, and contribute to long-term customer relationships.',
      color:'blue',
       tag:'Potential',
       
    }
  ]
  return (
    <div>
    <Section_1 user={user}  />
    <Section_2 />
    
    </div>
  )
}

export default App
