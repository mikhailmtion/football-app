import React from 'react';

function TeamInfo({ crestUrl, name, tla, venue }) {
  return (
    <div className="team-info">
      <div className="team-info__wrapper">
        <div className="team-info__image">
          <img src={crestUrl} alt={name} />
          <div className="team-info__team-name">
            <h2>{name}</h2>
            <div className="team-info__stadium">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3817 2.1164L17.7528 0.894766C17.6298 0.802724 17.4645 0.787263 17.3269 0.856476C17.1893 0.925689 17.1021 1.0666 17.1021 1.22052V4.87157C15.7135 4.45213 13.6905 4.25178 12.0584 4.15733C12.0168 4.12557 11.9688 4.10034 11.9159 4.08568C11.8043 4.05472 11.6911 4.07671 11.5982 4.1329C10.8205 4.09461 10.1697 4.07995 9.77232 4.07507V3.05382L11.2383 1.95434C11.3409 1.8778 11.4012 1.75644 11.4012 1.62859C11.4012 1.50074 11.3409 1.37937 11.2383 1.30283L9.60942 0.0811955C9.48726 -0.0116488 9.32112 -0.0255066 9.18349 0.042905C9.04503 0.112118 8.95791 0.253026 8.95791 0.406952V4.0751C8.56046 4.08079 7.90975 4.09545 7.13198 4.13294C7.03914 4.07675 6.92595 4.05556 6.81436 4.08572C6.76061 4.10038 6.71254 4.12561 6.67185 4.15737C4.68058 4.27301 2.10537 4.54505 0.813686 5.1811V3.86743L2.27965 2.76795C2.38307 2.69141 2.44255 2.57005 2.44255 2.4422C2.44255 2.31435 2.38227 2.19298 2.27965 2.11644L0.650788 0.894805C0.527823 0.802762 0.364124 0.787301 0.224857 0.856514C0.0871561 0.925727 0 1.06664 0 1.22056V6.1071C0 6.11688 0.000801698 6.13318 0.00244327 6.15188L0.811968 13.4369C0.811968 14.6968 4.02323 15.1765 6.51292 15.3598V12.6225C6.51292 11.949 7.06102 11.4009 7.73456 11.4009H10.9922C11.6658 11.4009 12.2139 11.949 12.2139 12.6225V15.3622C14.7036 15.1831 17.914 14.7131 17.9124 13.4817L18.7195 6.21949C18.7195 6.21625 18.7203 6.21216 18.7203 6.20892C18.7219 6.19017 18.7244 6.17063 18.726 6.15272C18.7276 6.13398 18.7284 6.11772 18.7284 6.10794C18.7284 5.73492 18.4189 5.43036 17.914 5.18194V3.86827L19.3816 2.76799C19.4842 2.69145 19.5445 2.57009 19.5445 2.44224C19.5445 2.31431 19.4843 2.19298 19.3817 2.1164ZM0.830712 6.11035C0.96429 5.9279 1.53113 5.69579 2.49702 5.48163C2.50844 5.50362 2.51493 5.52725 2.53043 5.54679L3.65025 6.94679C1.97092 6.68776 1.00174 6.35059 0.830712 6.11035ZM4.79778 7.09579C4.78721 7.07869 4.78312 7.0575 4.76927 7.04039L3.38557 5.31056C4.26106 5.16396 5.34343 5.03771 6.63104 4.96197L7.26385 7.28144C6.35006 7.24158 5.52748 7.17642 4.79778 7.09579ZM10.6128 7.31164C10.5158 7.31408 10.4238 7.31816 10.3253 7.31977C10.0133 7.32546 9.69326 7.32874 9.36426 7.32874C9.03442 7.32874 8.71354 7.32549 8.40081 7.31977C8.30308 7.31813 8.21187 7.31408 8.11575 7.31164L7.46419 4.92212C8.06115 4.89849 8.69396 4.88547 9.36426 4.88547C10.0345 4.88547 10.6673 4.89849 11.2643 4.92212L10.6128 7.31164ZM13.9307 7.09663C13.8306 7.10804 13.7345 7.11942 13.6302 7.13003C13.5195 7.14145 13.3997 7.15122 13.2849 7.16099C13.153 7.17321 13.0243 7.18543 12.8867 7.19684C12.749 7.20742 12.6024 7.21639 12.4599 7.22616C12.3361 7.23429 12.2172 7.24406 12.0893 7.25139C11.9232 7.26117 11.7472 7.2685 11.5738 7.27663C11.5371 7.27827 11.5021 7.27987 11.4655 7.28151L12.0983 4.96121C13.3875 5.03775 14.4715 5.16236 15.3478 5.30491L13.9592 7.04127C13.9454 7.05834 13.9413 7.07869 13.9307 7.09663ZM17.919 6.07045L17.9165 6.08103C17.9092 6.09405 17.8937 6.10871 17.8815 6.12256C17.8676 6.13803 17.8579 6.15269 17.8383 6.16899C17.8212 6.18284 17.7968 6.1975 17.7756 6.21132C17.7495 6.22843 17.7267 6.24553 17.6942 6.26343C17.6689 6.27729 17.6355 6.29195 17.607 6.30577C17.5687 6.32452 17.5329 6.34322 17.4873 6.36277C17.4539 6.37743 17.4124 6.39129 17.3749 6.40595C17.3236 6.42549 17.2747 6.44584 17.2169 6.46539C17.1754 6.48005 17.1257 6.4939 17.0801 6.50856C17.0165 6.52891 16.9555 6.5493 16.8846 6.56965C16.8341 6.5843 16.7763 6.59816 16.7225 6.61282C16.646 6.63317 16.5727 6.65356 16.4896 6.6739C16.4342 6.68692 16.3716 6.69998 16.3137 6.7138C16.2225 6.73499 16.1329 6.75533 16.0344 6.77568C15.9709 6.7887 15.9 6.80092 15.834 6.81397C15.7314 6.83352 15.632 6.85387 15.5221 6.87341C15.4431 6.88727 15.3568 6.90029 15.2745 6.91415C15.2102 6.92472 15.1467 6.93533 15.0799 6.94591L16.1989 5.54756C16.2176 5.52392 16.2258 5.49625 16.2388 5.47017C17.2422 5.68358 17.8196 5.91164 17.919 6.07045Z"
                  fill="#000E14"
                />
              </svg>
              <h4>{venue}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
