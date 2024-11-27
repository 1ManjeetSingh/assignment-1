import React from 'react'

const Duration = () => {
  return (
    <div className="SelectionPanel" style={{ width: 425.47, height: 106, paddingLeft: 24, paddingRight: 24, background: 'white', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: '2px #5C9AFF solid', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
      <div className="Frame1000008202" style={{ flex: '1 1 0', height: 106, paddingTop: 8, paddingBottom: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
        <svg style={{ width: "fit-content" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clip-path="url(#clip0_13_56)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6258 1.62951C11.6258 1.34367 11.7417 1.06953 11.9479 0.867404C12.1541 0.66528 12.4338 0.551727 12.7254 0.551727H18.5896C18.8813 0.551727 19.1609 0.66528 19.3671 0.867404C19.5733 1.06953 19.6892 1.34367 19.6892 1.62951C19.6892 1.91536 19.5733 2.1895 19.3671 2.39162C19.1609 2.59375 18.8813 2.7073 18.5896 2.7073H12.7254C12.4338 2.7073 12.1541 2.59375 11.9479 2.39162C11.7417 2.1895 11.6258 1.91536 11.6258 1.62951ZM15.6575 5.5814C12.4497 5.5814 9.37331 6.83047 7.10505 9.05384C4.8368 11.2772 3.56251 14.2927 3.56251 17.4371C3.56251 20.5814 4.8368 23.5969 7.10505 25.8203C9.37331 28.0436 12.4497 29.2927 15.6575 29.2927C18.8653 29.2927 21.9417 28.0436 24.21 25.8203C26.4782 23.5969 27.7525 20.5814 27.7525 17.4371C27.7525 14.2927 26.4782 11.2772 24.21 9.05384C21.9417 6.83047 18.8653 5.5814 15.6575 5.5814ZM1.36342 17.4371C1.36342 9.69854 7.76277 3.42583 15.6575 3.42583C23.5522 3.42583 29.9516 9.69854 29.9516 17.4371C29.9516 25.1756 23.5522 31.4483 15.6575 31.4483C7.76277 31.4483 1.36342 25.1756 1.36342 17.4371ZM15.6575 10.6111C15.9491 10.6111 16.2288 10.7246 16.435 10.9267C16.6412 11.1289 16.7571 11.403 16.7571 11.6889V17.4371C16.7571 17.7229 16.6412 17.997 16.435 18.1992C16.2288 18.4013 15.9491 18.5148 15.6575 18.5148C15.3659 18.5148 15.0862 18.4013 14.88 18.1992C14.6738 17.997 14.558 17.7229 14.558 17.4371V11.6889C14.558 11.403 14.6738 11.1289 14.88 10.9267C15.0862 10.7246 15.3659 10.6111 15.6575 10.6111Z" fill="#0072DC" />
          </g>
          <defs>
            <clipPath id="clip0_13_56">
              <rect width="30.8965" height="30.8965" fill="white" transform="translate(0.120453 0.551727)" />
            </clipPath>
          </defs>
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
          Duration per question
        </div>
      </div>
      </div>
    </div>
  )
}

export default Duration