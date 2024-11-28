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
          fontFamily: 'SF UI TEXT',
          fontWeight: 700,
          wordWrap: 'break-word',
          margin: '24px 0'
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
        &nbsp;
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
        <div className="toogleContainer flex bg-gray-200 rounded-full p-1 space-x-4" style={{ margin: '32px 0 0 0' }}>
          {/* Non-Technical Button */}

          <button
            className={`technical flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out ${
              selected === "nonTechnical"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white focus:outline-none border-none"
                : "bg-white text-gray-700 focus:outline-none border-none"
            }`}            
            onClick={() => setSelected("nonTechnical")}
          >
            {selected === "nonTechnical" ? <svg className="toogleIcon" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0233 7.54762C13.2639 6.89742 14.1835 6.89742 14.4241 7.54762L16.4602 13.05C16.6871 13.6633 17.1706 14.1468 17.7839 14.3737L23.2863 16.4098C23.9365 16.6504 23.9365 17.57 23.2863 17.8106L17.7839 19.8467C17.1706 20.0736 16.6871 20.5571 16.4602 21.1704L14.4241 26.6727C14.1835 27.3229 13.2639 27.3229 13.0233 26.6727L10.9872 21.1704C10.7603 20.5571 10.2768 20.0736 9.66352 19.8467L4.16114 17.8106C3.51094 17.57 3.51095 16.6504 4.16115 16.4098L9.66352 14.3737C10.2768 14.1468 10.7603 13.6633 10.9872 13.05L13.0233 7.54762Z" fill="white" />
              <path d="M22.4776 19.15C22.5979 18.8249 23.0577 18.8249 23.178 19.15L23.5786 20.2325C23.6164 20.3347 23.697 20.4153 23.7992 20.4531L24.8817 20.8537C25.2068 20.974 25.2068 21.4338 24.8817 21.5541L23.7992 21.9546C23.697 21.9925 23.6164 22.073 23.5786 22.1752L23.178 23.2577C23.0577 23.5828 22.5979 23.5828 22.4776 23.2577L22.0771 22.1752C22.0392 22.073 21.9587 21.9925 21.8564 21.9546L20.774 21.5541C20.4489 21.4338 20.4489 20.974 20.774 20.8537L21.8564 20.4531C21.9587 20.4153 22.0392 20.3347 22.0771 20.2325L22.4776 19.15Z" fill="white" />
              <path d="M6.1654 2.22633C6.40599 1.57613 7.32563 1.57613 7.56622 2.22633L8.36089 4.3739C8.43654 4.57832 8.59771 4.7395 8.80213 4.81514L10.9497 5.60981C11.5999 5.85041 11.5999 6.77004 10.9497 7.01064L8.80213 7.80531C8.59771 7.88095 8.43654 8.04213 8.36089 8.24655L7.56622 10.3941C7.32563 11.0443 6.40599 11.0443 6.1654 10.3941L5.37072 8.24655C5.29508 8.04213 5.13391 7.88095 4.92949 7.80531L2.78192 7.01064C2.13172 6.77004 2.13172 5.85041 2.78192 5.60981L4.92949 4.81514C5.13391 4.7395 5.29508 4.57832 5.37072 4.3739L6.1654 2.22633Z" fill="white" />
              <path d="M19.8153 5.31396L20.5782 7.37565C20.6916 7.68228 20.9334 7.92404 21.24 8.0375L23.3017 8.80039L21.24 9.56328C20.9334 9.67674 20.6916 9.9185 20.5782 10.2251L19.8153 12.2868L19.0524 10.2251C18.9389 9.9185 18.6972 9.67674 18.3905 9.56328L16.3289 8.80039L18.3905 8.0375C18.6972 7.92404 18.9389 7.68228 19.0524 7.37564L19.8153 5.31396Z" fill="white" />
              <path d="M6.87154 21.5679C7.13433 21.3418 7.53653 21.5647 7.48418 21.9074L7.20733 23.7196C7.19087 23.8273 7.2223 23.9369 7.29337 24.0195L8.48888 25.4093C8.71494 25.6721 8.49207 26.0743 8.1494 26.022L6.33716 25.7451C6.22943 25.7287 6.11988 25.7601 6.03726 25.8312L4.64744 27.0267C4.38464 27.2527 3.98245 27.0299 4.0348 26.6872L4.31165 24.875C4.32811 24.7672 4.29668 24.6577 4.22561 24.575L3.03009 23.1852C2.80404 22.9224 3.02691 22.5202 3.36958 22.5726L5.18181 22.8494C5.28955 22.8659 5.3991 22.8345 5.48172 22.7634L6.87154 21.5679Z" fill="white" />
            </svg>
              : <svg className="toogleIcon" xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
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
            className={`technical flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out ${
              selected === "technical"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white focus:outline-none border-none"
                : "bg-white text-gray-700 focus:outline-none border-none"
            }`}            
            onClick={() => setSelected("technical")}
          >
            {selected === "technical" ? <svg className="toogleIcon" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0233 7.54762C13.2639 6.89742 14.1835 6.89742 14.4241 7.54762L16.4602 13.05C16.6871 13.6633 17.1706 14.1468 17.7839 14.3737L23.2863 16.4098C23.9365 16.6504 23.9365 17.57 23.2863 17.8106L17.7839 19.8467C17.1706 20.0736 16.6871 20.5571 16.4602 21.1704L14.4241 26.6727C14.1835 27.3229 13.2639 27.3229 13.0233 26.6727L10.9872 21.1704C10.7603 20.5571 10.2768 20.0736 9.66352 19.8467L4.16114 17.8106C3.51094 17.57 3.51095 16.6504 4.16115 16.4098L9.66352 14.3737C10.2768 14.1468 10.7603 13.6633 10.9872 13.05L13.0233 7.54762Z" fill="white" />
              <path d="M22.4776 19.15C22.5979 18.8249 23.0577 18.8249 23.178 19.15L23.5786 20.2325C23.6164 20.3347 23.697 20.4153 23.7992 20.4531L24.8817 20.8537C25.2068 20.974 25.2068 21.4338 24.8817 21.5541L23.7992 21.9546C23.697 21.9925 23.6164 22.073 23.5786 22.1752L23.178 23.2577C23.0577 23.5828 22.5979 23.5828 22.4776 23.2577L22.0771 22.1752C22.0392 22.073 21.9587 21.9925 21.8564 21.9546L20.774 21.5541C20.4489 21.4338 20.4489 20.974 20.774 20.8537L21.8564 20.4531C21.9587 20.4153 22.0392 20.3347 22.0771 20.2325L22.4776 19.15Z" fill="white" />
              <path d="M6.1654 2.22633C6.40599 1.57613 7.32563 1.57613 7.56622 2.22633L8.36089 4.3739C8.43654 4.57832 8.59771 4.7395 8.80213 4.81514L10.9497 5.60981C11.5999 5.85041 11.5999 6.77004 10.9497 7.01064L8.80213 7.80531C8.59771 7.88095 8.43654 8.04213 8.36089 8.24655L7.56622 10.3941C7.32563 11.0443 6.40599 11.0443 6.1654 10.3941L5.37072 8.24655C5.29508 8.04213 5.13391 7.88095 4.92949 7.80531L2.78192 7.01064C2.13172 6.77004 2.13172 5.85041 2.78192 5.60981L4.92949 4.81514C5.13391 4.7395 5.29508 4.57832 5.37072 4.3739L6.1654 2.22633Z" fill="white" />
              <path d="M19.8153 5.31396L20.5782 7.37565C20.6916 7.68228 20.9334 7.92404 21.24 8.0375L23.3017 8.80039L21.24 9.56328C20.9334 9.67674 20.6916 9.9185 20.5782 10.2251L19.8153 12.2868L19.0524 10.2251C18.9389 9.9185 18.6972 9.67674 18.3905 9.56328L16.3289 8.80039L18.3905 8.0375C18.6972 7.92404 18.9389 7.68228 19.0524 7.37564L19.8153 5.31396Z" fill="white" />
              <path d="M6.87154 21.5679C7.13433 21.3418 7.53653 21.5647 7.48418 21.9074L7.20733 23.7196C7.19087 23.8273 7.2223 23.9369 7.29337 24.0195L8.48888 25.4093C8.71494 25.6721 8.49207 26.0743 8.1494 26.022L6.33716 25.7451C6.22943 25.7287 6.11988 25.7601 6.03726 25.8312L4.64744 27.0267C4.38464 27.2527 3.98245 27.0299 4.0348 26.6872L4.31165 24.875C4.32811 24.7672 4.29668 24.6577 4.22561 24.575L3.03009 23.1852C2.80404 22.9224 3.02691 22.5202 3.36958 22.5726L5.18181 22.8494C5.28955 22.8659 5.3991 22.8345 5.48172 22.7634L6.87154 21.5679Z" fill="white" />
            </svg>
              : <svg className="toogleIcon" xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
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