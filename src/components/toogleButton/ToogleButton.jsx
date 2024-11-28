import { useState } from "react";
import './index.css';


const ToggleButton = () => {
  const [selected, setSelected] = useState("nonTechnical");
  return (
    <>

      <div
        className="LetsGetYouStartedWithSchedulingYourAiInterview"
        style={{
          width: 892,
          textAlign: 'center',
          color: '#D388FF',
          fontSize: 48,
          fontFamily: 'SF UI Display',
          fontWeight: 700,
          wordWrap: 'break-word',
          margin: '32px 0'
        }}
      >
        Let's get you started with scheduling your AI interview
      </div>

      <div
        className="YouHaveSelected1024CandidatesForInterview"
        style={{
          width: 908,
          textAlign: 'center'
        }}
      >
        <span
          style={{
            color: '#161616',
            fontSize: 24,
            fontFamily: 'SF UI Text',
            fontWeight: 400,
            lineHeight: '1.2',
            wordWrap: 'break-word'
          }}
        >
          You have selected
        </span>
        <span
          style={{
            color: '#161616',
            fontSize: 24,
            fontFamily: 'SF UI Text',
            fontWeight: 600,
            lineHeight: '1.2',
            wordWrap: 'break-word'
          }}
        >
          &nbsp;
        </span>
        <span
          style={{
            color: '#0072DC',
            fontSize: 24,
            fontFamily: 'SF UI Text',
            fontWeight: 600,
            lineHeight: '1.2',
            wordWrap: 'break-word'
          }}
        >
          1024 candidates
        </span>
        <span
          style={{
            color: '#161616',
            fontSize: 24,
            fontFamily: 'SF UI Text',
            fontWeight: 400,
            lineHeight: '1.2',
            wordWrap: 'break-word'
          }}
        >
          for interview.
        </span>
      </div>


      <div >
        <div className="toogleContainer flex bg-gray-200 rounded-full p-1 space-x-4" style={{margin: '32px 0 0 0'}}>
          {/* Non-Technical Button */}

          <button
            className={`nonTechnical flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out ${selected === "nonTechnical"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white text-gray-700"
              }`}
            onClick={() => setSelected("nonTechnical")}
          >
            {selected === "nonTechnical" ? <svg className="toogleIcon" xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
              <g filter="url(#filter0_dd_13_10)">
                <path d="M25.1411 29.6518C24.8836 29.5994 24.8833 29.2321 25.1392 29.1719C30.0874 28.008 33.9118 24.0077 34.8119 19.0047L34.8684 18.6911C34.9202 18.4028 35.3325 18.3996 35.3889 18.687L35.4857 19.1805C36.451 24.0983 40.186 28.0069 45.0548 29.1946C45.3143 29.2579 45.3147 29.6265 45.0562 29.6939C40.1756 30.9664 36.4315 34.9225 35.45 39.8699L35.3918 40.1636C35.335 40.4498 34.9241 40.4454 34.8735 40.158L34.7632 39.532C33.8904 34.5745 30.0738 30.6555 25.1411 29.6518Z" fill="white" />
              </g>
              <path d="M44.4866 32.5655C44.579 32.3445 45.3006 32.3445 45.3931 32.5655C45.5295 32.8921 45.7035 33.1981 45.9233 33.418C46.1432 33.6379 46.4493 33.8118 46.7758 33.9483C46.9969 34.0407 46.9969 34.7623 46.7758 34.8547C46.4493 34.9912 46.1432 35.1652 45.9233 35.385C45.7035 35.6049 45.5295 35.911 45.393 36.2375C45.3006 36.4586 44.579 36.4586 44.4866 36.2375C44.3501 35.911 44.1762 35.6049 43.9563 35.385C43.7365 35.1652 43.4304 34.9912 43.1039 34.8547C42.8828 34.7623 42.8828 34.0407 43.1039 33.9483C43.4304 33.8118 43.7365 33.6379 43.9563 33.418C44.1762 33.1981 44.3501 32.8921 44.4866 32.5655Z" fill="white" />
              <path d="M29.2664 19.4143C29.1381 18.9683 29.6339 18.6032 30.0217 18.8583L30.1935 18.9713C30.6812 19.292 31.2847 19.3837 31.8456 19.2222L31.9189 19.2012C32.3787 19.0688 32.7439 19.5959 32.4585 19.9799L31.9948 20.6037C31.8966 20.7358 31.8697 20.9078 31.9228 21.0635L32.1226 21.6487C32.2832 22.1194 31.7329 22.5105 31.3413 22.204L30.8857 21.8475C30.75 21.7413 30.5692 21.7125 30.4072 21.7712L29.6321 22.0521C29.1798 22.216 28.7797 21.7092 29.044 21.3072L29.4514 20.6878C29.5315 20.5659 29.5545 20.415 29.5141 20.2748L29.2664 19.4143Z" fill="white" />
              <path d="M44.295 15.0004L44.1169 17.7804C44.061 18.6535 44.389 19.5075 45.015 20.1187L46.8944 21.9536L44.269 21.8734C43.3945 21.8466 42.5519 22.2029 41.962 22.849L40.0836 24.906L40.2616 22.1261C40.3175 21.253 39.9895 20.399 39.3635 19.7878L37.4841 17.9528L40.1095 18.0331C40.984 18.0598 41.8266 17.7035 42.4166 17.0574L44.295 15.0004Z" fill="white" />
              <path d="M29.1182 33.9168C29.4027 34.0115 29.3877 34.4188 29.0971 34.4923L27.7564 34.8316C27.6572 34.8567 27.5776 34.9306 27.5453 35.0277L27.1087 36.34C27.0141 36.6244 26.6068 36.6095 26.5333 36.3188L26.194 34.9781C26.1689 34.8789 26.095 34.7994 25.9979 34.7671L24.6856 34.3305C24.4012 34.2359 24.4161 33.8285 24.7067 33.755L26.0474 33.4157C26.1466 33.3906 26.2262 33.3167 26.2585 33.2196L26.6951 31.9074C26.7897 31.6229 27.197 31.6379 27.2706 31.9285L27.6098 33.2692C27.6349 33.3684 27.7089 33.448 27.806 33.4803L29.1182 33.9168Z" fill="white" />
              <defs>
                <filter id="filter0_dd_13_10" x="0.647633" y="0.173145" width="68.9021" height="70.5028" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="12.15" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.223529 0 0 0 0 0.521569 0 0 0 0 0.933333 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_10" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="-2" dy="-1" />
                  <feGaussianBlur stdDeviation="6.45" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.65098 0 0 0 0 0.843137 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_13_10" result="effect2_dropShadow_13_10" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_13_10" result="shape" />
                </filter>
              </defs>
            </svg> : <svg className="toogleIcon" xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
              <path d="M19.7981 17.4842C19.9592 17.0489 20.5749 17.0489 20.736 17.4842L20.9226 17.9886C20.9733 18.1255 21.0812 18.2334 21.2181 18.284L21.7225 18.4707C22.1578 18.6318 22.1578 19.2475 21.7225 19.4085L21.2181 19.5952C21.0812 19.6459 20.9733 19.7538 20.9226 19.8906L20.736 20.3951C20.5749 20.8304 19.9592 20.8304 19.7981 20.3951L19.6115 19.8906C19.5608 19.7538 19.4529 19.6459 19.3161 19.5952L18.8116 19.4085C18.3763 19.2475 18.3763 18.6318 18.8116 18.4707L19.3161 18.284C19.4529 18.2334 19.5608 18.1255 19.6115 17.9886L19.7981 17.4842Z" fill="url(#paint0_linear_13_19)" />
              <path d="M4.86041 2.18043C5.20448 1.36596 6.35869 1.36596 6.70276 2.18043L7.23437 3.43885C7.33569 3.67869 7.52656 3.86956 7.7664 3.97088L9.02481 4.50248C9.83929 4.84655 9.83929 6.00077 9.02481 6.34484L7.7664 6.87645C7.52656 6.97777 7.33569 7.16863 7.23437 7.40848L6.70276 8.66689C6.35869 9.48136 5.20448 9.48136 4.86041 8.66689L4.3288 7.40848C4.22748 7.16863 4.03661 6.97777 3.79677 6.87645L2.53836 6.34484C1.72389 6.00077 1.72389 4.84655 2.53836 4.50248L3.79677 3.97088C4.03661 3.86956 4.22748 3.67869 4.3288 3.43884L4.86041 2.18043Z" fill="url(#paint1_linear_13_19)" />
              <path d="M17.5335 4.51958L17.9093 5.53521C18.2131 6.35636 18.8606 7.0038 19.6817 7.30765L20.6974 7.68347L19.6817 8.05928C18.8606 8.36314 18.2131 9.01057 17.9093 9.83173L17.5335 10.8474L17.1576 9.83173C16.8538 9.01057 16.2064 8.36314 15.3852 8.05928L14.3696 7.68347L15.3852 7.30765C16.2064 7.0038 16.8538 6.35636 17.1576 5.53521L17.5335 4.51958Z" fill="url(#paint2_linear_13_19)" />
              <path d="M5.45679 19.5537C5.80867 19.2511 6.34721 19.5495 6.27712 20.0083L6.10283 21.1492C6.08079 21.2934 6.12287 21.4401 6.21804 21.5508L6.97067 22.4257C7.27335 22.7776 6.97493 23.3161 6.5161 23.246L5.37521 23.0718C5.23096 23.0497 5.08427 23.0918 4.97364 23.187L4.09869 23.9396C3.7468 24.2423 3.20826 23.9439 3.27836 23.485L3.45265 22.3441C3.47469 22.1999 3.43261 22.0532 3.33744 21.9426L2.58481 21.0676C2.28213 20.7157 2.58054 20.1772 3.03938 20.2473L4.18026 20.4216C4.32452 20.4436 4.4712 20.4015 4.58183 20.3064L5.45679 19.5537Z" fill="url(#paint3_linear_13_19)" />
              <path d="M11.5362 6.0961C11.6973 5.66079 12.313 5.66079 12.4741 6.09609L13.8555 9.82927C14.4632 11.4716 15.758 12.7664 17.4004 13.3742L21.1335 14.7556C21.5688 14.9166 21.5688 15.5323 21.1335 15.6934L17.4004 17.0748C15.758 17.6825 14.4632 18.9774 13.8555 20.6197L12.4741 24.3529C12.313 24.7882 11.6973 24.7882 11.5362 24.3529L10.1548 20.6197C9.54711 18.9774 8.25224 17.6825 6.60993 17.0748L2.87675 15.6934C2.44144 15.5323 2.44144 14.9166 2.87675 14.7556L6.60993 13.3742C8.25224 12.7664 9.54711 11.4716 10.1548 9.82927L11.5362 6.0961Z" fill="url(#paint4_linear_13_19)" />
              <defs>
                <linearGradient id="paint0_linear_13_19" x1="18.8513" y1="17.7518" x2="22.9898" y2="24.0685" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D388FF" />
                  <stop offset="0.695" stop-color="#4B94F7" />
                </linearGradient>
                <linearGradient id="paint1_linear_13_19" x1="9.82792" y1="10.8475" x2="-3.24088" y2="-3.92592" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0189477" stop-color="#89B5FF" />
                  <stop offset="0.745" stop-color="#002886" />
                </linearGradient>
                <linearGradient id="paint2_linear_13_19" x1="19.8938" y1="10.8474" x2="12.2704" y2="2.22955" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="0.315" stop-color="#FF8CB6" />
                </linearGradient>
                <linearGradient id="paint3_linear_13_19" x1="5.36766" y1="26.0916" x2="2.6004" y2="13.6139" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF5FD7" />
                  <stop offset="0.545" stop-color="#C86AFF" />
                </linearGradient>
                <linearGradient id="paint4_linear_13_19" x1="25.0462" y1="32.551" x2="2.51143" y2="3.98021" gradientUnits="userSpaceOnUse">
                  <stop offset="0.340919" stop-color="#002DBF" />
                  <stop offset="0.479627" stop-color="#4396F7" />
                  <stop offset="0.634404" stop-color="#FF9BD2" />
                  <stop offset="0.815235" stop-color="#C9FFFC" />
                </linearGradient>
              </defs>
            </svg>}
            AI Non-Technical Interview
          </button>

          {/* Technical Button */}
          <button
            className={`technical flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out ${selected === "technical"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-white text-gray-700"
              }`}
            onClick={() => setSelected("technical")}
          >
            {selected === "technical" ? <svg className="toogleIcon" xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
              <g filter="url(#filter0_dd_13_10)">
                <path d="M25.1411 29.6518C24.8836 29.5994 24.8833 29.2321 25.1392 29.1719C30.0874 28.008 33.9118 24.0077 34.8119 19.0047L34.8684 18.6911C34.9202 18.4028 35.3325 18.3996 35.3889 18.687L35.4857 19.1805C36.451 24.0983 40.186 28.0069 45.0548 29.1946C45.3143 29.2579 45.3147 29.6265 45.0562 29.6939C40.1756 30.9664 36.4315 34.9225 35.45 39.8699L35.3918 40.1636C35.335 40.4498 34.9241 40.4454 34.8735 40.158L34.7632 39.532C33.8904 34.5745 30.0738 30.6555 25.1411 29.6518Z" fill="white" />
              </g>
              <path d="M44.4866 32.5655C44.579 32.3445 45.3006 32.3445 45.3931 32.5655C45.5295 32.8921 45.7035 33.1981 45.9233 33.418C46.1432 33.6379 46.4493 33.8118 46.7758 33.9483C46.9969 34.0407 46.9969 34.7623 46.7758 34.8547C46.4493 34.9912 46.1432 35.1652 45.9233 35.385C45.7035 35.6049 45.5295 35.911 45.393 36.2375C45.3006 36.4586 44.579 36.4586 44.4866 36.2375C44.3501 35.911 44.1762 35.6049 43.9563 35.385C43.7365 35.1652 43.4304 34.9912 43.1039 34.8547C42.8828 34.7623 42.8828 34.0407 43.1039 33.9483C43.4304 33.8118 43.7365 33.6379 43.9563 33.418C44.1762 33.1981 44.3501 32.8921 44.4866 32.5655Z" fill="white" />
              <path d="M29.2664 19.4143C29.1381 18.9683 29.6339 18.6032 30.0217 18.8583L30.1935 18.9713C30.6812 19.292 31.2847 19.3837 31.8456 19.2222L31.9189 19.2012C32.3787 19.0688 32.7439 19.5959 32.4585 19.9799L31.9948 20.6037C31.8966 20.7358 31.8697 20.9078 31.9228 21.0635L32.1226 21.6487C32.2832 22.1194 31.7329 22.5105 31.3413 22.204L30.8857 21.8475C30.75 21.7413 30.5692 21.7125 30.4072 21.7712L29.6321 22.0521C29.1798 22.216 28.7797 21.7092 29.044 21.3072L29.4514 20.6878C29.5315 20.5659 29.5545 20.415 29.5141 20.2748L29.2664 19.4143Z" fill="white" />
              <path d="M44.295 15.0004L44.1169 17.7804C44.061 18.6535 44.389 19.5075 45.015 20.1187L46.8944 21.9536L44.269 21.8734C43.3945 21.8466 42.5519 22.2029 41.962 22.849L40.0836 24.906L40.2616 22.1261C40.3175 21.253 39.9895 20.399 39.3635 19.7878L37.4841 17.9528L40.1095 18.0331C40.984 18.0598 41.8266 17.7035 42.4166 17.0574L44.295 15.0004Z" fill="white" />
              <path d="M29.1182 33.9168C29.4027 34.0115 29.3877 34.4188 29.0971 34.4923L27.7564 34.8316C27.6572 34.8567 27.5776 34.9306 27.5453 35.0277L27.1087 36.34C27.0141 36.6244 26.6068 36.6095 26.5333 36.3188L26.194 34.9781C26.1689 34.8789 26.095 34.7994 25.9979 34.7671L24.6856 34.3305C24.4012 34.2359 24.4161 33.8285 24.7067 33.755L26.0474 33.4157C26.1466 33.3906 26.2262 33.3167 26.2585 33.2196L26.6951 31.9074C26.7897 31.6229 27.197 31.6379 27.2706 31.9285L27.6098 33.2692C27.6349 33.3684 27.7089 33.448 27.806 33.4803L29.1182 33.9168Z" fill="white" />
              <defs>
                <filter id="filter0_dd_13_10" x="0.647633" y="0.173145" width="68.9021" height="70.5028" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="12.15" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.223529 0 0 0 0 0.521569 0 0 0 0 0.933333 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_10" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="-2" dy="-1" />
                  <feGaussianBlur stdDeviation="6.45" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.65098 0 0 0 0 0.843137 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_13_10" result="effect2_dropShadow_13_10" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_13_10" result="shape" />
                </filter>
              </defs>
            </svg> : <svg className="toogleIcon" xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
              <path d="M19.7981 17.4842C19.9592 17.0489 20.5749 17.0489 20.736 17.4842L20.9226 17.9886C20.9733 18.1255 21.0812 18.2334 21.2181 18.284L21.7225 18.4707C22.1578 18.6318 22.1578 19.2475 21.7225 19.4085L21.2181 19.5952C21.0812 19.6459 20.9733 19.7538 20.9226 19.8906L20.736 20.3951C20.5749 20.8304 19.9592 20.8304 19.7981 20.3951L19.6115 19.8906C19.5608 19.7538 19.4529 19.6459 19.3161 19.5952L18.8116 19.4085C18.3763 19.2475 18.3763 18.6318 18.8116 18.4707L19.3161 18.284C19.4529 18.2334 19.5608 18.1255 19.6115 17.9886L19.7981 17.4842Z" fill="url(#paint0_linear_13_19)" />
              <path d="M4.86041 2.18043C5.20448 1.36596 6.35869 1.36596 6.70276 2.18043L7.23437 3.43885C7.33569 3.67869 7.52656 3.86956 7.7664 3.97088L9.02481 4.50248C9.83929 4.84655 9.83929 6.00077 9.02481 6.34484L7.7664 6.87645C7.52656 6.97777 7.33569 7.16863 7.23437 7.40848L6.70276 8.66689C6.35869 9.48136 5.20448 9.48136 4.86041 8.66689L4.3288 7.40848C4.22748 7.16863 4.03661 6.97777 3.79677 6.87645L2.53836 6.34484C1.72389 6.00077 1.72389 4.84655 2.53836 4.50248L3.79677 3.97088C4.03661 3.86956 4.22748 3.67869 4.3288 3.43884L4.86041 2.18043Z" fill="url(#paint1_linear_13_19)" />
              <path d="M17.5335 4.51958L17.9093 5.53521C18.2131 6.35636 18.8606 7.0038 19.6817 7.30765L20.6974 7.68347L19.6817 8.05928C18.8606 8.36314 18.2131 9.01057 17.9093 9.83173L17.5335 10.8474L17.1576 9.83173C16.8538 9.01057 16.2064 8.36314 15.3852 8.05928L14.3696 7.68347L15.3852 7.30765C16.2064 7.0038 16.8538 6.35636 17.1576 5.53521L17.5335 4.51958Z" fill="url(#paint2_linear_13_19)" />
              <path d="M5.45679 19.5537C5.80867 19.2511 6.34721 19.5495 6.27712 20.0083L6.10283 21.1492C6.08079 21.2934 6.12287 21.4401 6.21804 21.5508L6.97067 22.4257C7.27335 22.7776 6.97493 23.3161 6.5161 23.246L5.37521 23.0718C5.23096 23.0497 5.08427 23.0918 4.97364 23.187L4.09869 23.9396C3.7468 24.2423 3.20826 23.9439 3.27836 23.485L3.45265 22.3441C3.47469 22.1999 3.43261 22.0532 3.33744 21.9426L2.58481 21.0676C2.28213 20.7157 2.58054 20.1772 3.03938 20.2473L4.18026 20.4216C4.32452 20.4436 4.4712 20.4015 4.58183 20.3064L5.45679 19.5537Z" fill="url(#paint3_linear_13_19)" />
              <path d="M11.5362 6.0961C11.6973 5.66079 12.313 5.66079 12.4741 6.09609L13.8555 9.82927C14.4632 11.4716 15.758 12.7664 17.4004 13.3742L21.1335 14.7556C21.5688 14.9166 21.5688 15.5323 21.1335 15.6934L17.4004 17.0748C15.758 17.6825 14.4632 18.9774 13.8555 20.6197L12.4741 24.3529C12.313 24.7882 11.6973 24.7882 11.5362 24.3529L10.1548 20.6197C9.54711 18.9774 8.25224 17.6825 6.60993 17.0748L2.87675 15.6934C2.44144 15.5323 2.44144 14.9166 2.87675 14.7556L6.60993 13.3742C8.25224 12.7664 9.54711 11.4716 10.1548 9.82927L11.5362 6.0961Z" fill="url(#paint4_linear_13_19)" />
              <defs>
                <linearGradient id="paint0_linear_13_19" x1="18.8513" y1="17.7518" x2="22.9898" y2="24.0685" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D388FF" />
                  <stop offset="0.695" stop-color="#4B94F7" />
                </linearGradient>
                <linearGradient id="paint1_linear_13_19" x1="9.82792" y1="10.8475" x2="-3.24088" y2="-3.92592" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0189477" stop-color="#89B5FF" />
                  <stop offset="0.745" stop-color="#002886" />
                </linearGradient>
                <linearGradient id="paint2_linear_13_19" x1="19.8938" y1="10.8474" x2="12.2704" y2="2.22955" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="0.315" stop-color="#FF8CB6" />
                </linearGradient>
                <linearGradient id="paint3_linear_13_19" x1="5.36766" y1="26.0916" x2="2.6004" y2="13.6139" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF5FD7" />
                  <stop offset="0.545" stop-color="#C86AFF" />
                </linearGradient>
                <linearGradient id="paint4_linear_13_19" x1="25.0462" y1="32.551" x2="2.51143" y2="3.98021" gradientUnits="userSpaceOnUse">
                  <stop offset="0.340919" stop-color="#002DBF" />
                  <stop offset="0.479627" stop-color="#4396F7" />
                  <stop offset="0.634404" stop-color="#FF9BD2" />
                  <stop offset="0.815235" stop-color="#C9FFFC" />
                </linearGradient>
              </defs>
            </svg>}
            AI Technical Interview
          </button>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;