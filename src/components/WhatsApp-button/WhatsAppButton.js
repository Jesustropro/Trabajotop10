import React from "react";
import "../WhatsApp-button/WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=543512609595&text=Hola%21%20"
        target="blank"
        class="floatWpp"
      >
        <svg
          width="33"
          height="60"
          viewBox="0 5 33 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.169 5.12418C25.1107 2.06327 21.0434 0.37672 16.7099 0.375C7.78127 0.375 0.514399 7.63909 0.510825 16.5679C0.509678 19.422 1.25559 22.2079 2.67314 24.6637L0.375 33.0553L8.96236 30.8035C11.3284 32.0935 13.9923 32.7734 16.7035 32.7746H16.7102C25.6379 32.7746 32.9055 25.5096 32.9091 16.5807C32.9108 12.2538 31.2274 8.18508 28.169 5.12418V5.12418ZM16.7102 30.0396H16.7046C14.2887 30.0386 11.9191 29.3898 9.85187 28.1635L9.36018 27.8718L4.26432 29.2081L5.62451 24.2413L5.30429 23.732C3.95653 21.589 3.24472 19.1121 3.24578 16.5689C3.24869 9.14773 9.28867 3.11004 16.7154 3.11004C20.3115 3.11141 23.6921 4.51334 26.2341 7.05741C28.7762 9.60148 30.1753 12.9833 30.174 16.5797C30.1711 24.0015 24.1312 30.0396 16.7102 30.0396V30.0396ZM24.0954 19.9589C23.6906 19.7564 21.7007 18.7775 21.3296 18.6425C20.9586 18.5074 20.6888 18.4399 20.4189 18.845C20.1492 19.2501 19.3735 20.1615 19.1373 20.4315C18.9012 20.7016 18.6651 20.7354 18.2604 20.5328C17.8556 20.3303 16.5514 19.903 15.0054 18.5245C13.8022 17.4517 12.9898 16.1265 12.7537 15.7214C12.5176 15.3163 12.7286 15.0974 12.9312 14.8956C13.1133 14.7143 13.336 14.423 13.5384 14.1867C13.7407 13.9505 13.8082 13.7816 13.9431 13.5116C14.078 13.2416 14.0105 13.0052 13.9093 12.8027C13.8082 12.6002 12.9987 10.6086 12.6614 9.7984C12.3329 9.00939 11.9991 9.11615 11.7506 9.10375C11.5148 9.09202 11.2447 9.08954 10.9749 9.08954C10.7051 9.08954 10.2666 9.19079 9.89559 9.59588C9.52459 10.001 8.47897 10.9799 8.47897 12.9715C8.47897 14.9631 9.92929 16.8872 10.1317 17.1572C10.3341 17.4273 12.9858 21.5143 17.0461 23.267C18.0118 23.6839 18.7657 23.9329 19.3536 24.1194C20.3232 24.4273 21.2056 24.3838 21.903 24.2797C22.6807 24.1635 24.2977 23.3009 24.6351 22.3557C24.9724 21.4105 24.9724 20.6004 24.8712 20.4316C24.77 20.2628 24.5002 20.1615 24.0954 19.9589V19.9589Z"
            fill="white"
          />
        </svg>
      </a>
    </>
  );
};
export default WhatsAppButton;