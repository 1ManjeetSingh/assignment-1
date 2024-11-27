import React from 'react'

const Questions = () => {
  return (
    <div className="SelectionPanel" style={{width: 425.47, height: 106, paddingLeft: 24, paddingRight: 24, background: 'white', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '2px #5C9AFF solid', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
  <div className="Frame1000008202" style={{flex: '1 1 0', height: 106, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
  <svg style={{width: "fit-content"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M7.08335 6.72795H5.25077C4.27872 6.72795 3.34647 7.1141 2.65913 7.80145C1.97178 8.48879 1.58563 9.42104 1.58563 10.3931V26.8862C1.58563 27.8583 1.97178 28.7905 2.65913 29.4779C3.34647 30.1652 4.27872 30.5514 5.25077 30.5514H21.7439C22.716 30.5514 23.6482 30.1652 24.3356 29.4779C25.0229 28.7905 25.4091 27.8583 25.4091 26.8862V25.0537" stroke="#0072DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.1982 5.3067L26.8305 10.939M29.4308 8.28244C30.1702 7.54301 30.5856 6.54014 30.5856 5.49444C30.5856 4.44874 30.1702 3.44587 29.4308 2.70645C28.6914 1.96702 27.6885 1.55162 26.6428 1.55162C25.5971 1.55162 24.5942 1.96702 23.8548 2.70645L8.05615 18.4488V24.0811H13.6885L29.4308 8.28244Z" stroke="#0072DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div
        className="Content"
        style={{
          flex: 1,
          height: '100%',
          padding: 16,
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          className="Heading"
          style={{
            color: '#5C9AFF',
            fontSize: 24,
            fontFamily: 'SF UI Text',
            fontWeight: 600,
            lineHeight: '28px',
            wordWrap: 'break-word',
          }}
        >
          Type custom interview questions
        </div>
      </div>
  </div>
</div>
  )
}

export default Questions