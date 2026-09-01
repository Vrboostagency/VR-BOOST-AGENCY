import RevealStagger from "@/components/motion/RevealStagger";

export default function OthersProduct() {
  return (
    <section className="w-full flex justify-center px-4 py-16 sm:py-20 md:py-24">
      <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14 w-full max-w-[1208px]">
        <div className="flex flex-col items-center gap-7">
          <div className="relative flex flex-col items-center px-4">
            <p className="text-[#202024] font-lufga text-[32px] font-bold leading-[1.15] text-center tracking-[-0.04em] sm:text-[40px] md:text-[49px] md:leading-[53px]">
              Other Products
            </p>
            <svg
              width="342"
              height="16"
              viewBox="0 0 342 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-full mt-2 h-auto w-[200px] sm:w-[260px] md:w-[340px]"
            >
              <path
                d="M340.897 0.509766L336.404 6.75354L0.897095 14.5098L7.38755 3.72506L340.897 0.509766Z"
                fill="#2055FF"
                stroke="#2055FF"
              />
            </svg>
          </div>
          <p className="max-w-[672px] text-[#434656] font-inter text-lg leading-7 text-center">
            we provide 4 more features and this is the description for the
            section just to get the idea
          </p>
        </div>

        <RevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 w-full max-w-[1090px] mx-auto"
          stagger={0.1}
          y={28}
          scale={0.96}
        >
          {/* Indoor Navigation */}
          <a
            href="/Product/Navigation"
            className="group flex p-6 sm:p-8 flex-col items-start rounded-xl bg-[#0A1020] shadow-[0px_24px_48px_-12px_rgba(21,27,46,0.06)] lg:col-span-7 min-h-[280px] sm:min-h-[326px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute left-[30px] top-7 w-[62px] h-[63px] bg-[#2055FF] blur-[58px] z-0" />
            <div className="flex pb-8 flex-col items-start shrink-0 w-14 h-[88px] relative z-10">
              <div className="flex justify-center items-center shrink-0 rounded-xl bg-[rgba(32,85,255,0.22)] w-14 h-14">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.375 22.5L8.8125 13.6875L0 10.125V8.375L22.5 0L14.125 22.5H12.375ZM13.1875 17.875L18.25 4.25L4.625 9.3125L10.75 11.75L13.1875 17.875Z"
                    fill="#2055FF"
                  />
                </svg>
              </div>
            </div>
            <div className="flex pb-4 flex-col items-start relative z-10">
              <p className="text-[#FFF] font-lufga text-2xl font-bold leading-7 max-w-[214px]">
                Indoor Navigation
              </p>
            </div>
            <div className="flex pt-0 pr-0 lg:pr-[64px] pb-8 pl-0 flex-col items-start relative z-10">
              <p className="text-[#777] font-inter text-base leading-[26px] max-w-full lg:max-w-[210px]">
                Precision spatial mapping for complex architectural spaces,
                ensuring you're never lost.
              </p>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <p className="text-[#2055FF] font-inter text-sm font-semibold leading-5">
                Learn more
              </p>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z"
                  fill="#2055FF"
                />
              </svg>
            </div>
            <img
              src="/brand/products/images/Indoor.png"
              className="hidden lg:block absolute right-2 -bottom-[13px] w-[302px] h-[290px] max-w-none transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
              alt="Indoor Navigation"
            />
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex justify-center items-center absolute right-0 top-0 w-[62px] h-[62px] z-10"
            >
              <path
                d="M23.1161 37.1161C22.628 37.6043 22.628 38.3957 23.1161 38.8839C23.6043 39.372 24.3957 39.372 24.8839 38.8839L24 38L23.1161 37.1161ZM39.25 24C39.25 23.3096 38.6904 22.75 38 22.75H26.75C26.0596 22.75 25.5 23.3096 25.5 24C25.5 24.6904 26.0596 25.25 26.75 25.25H36.75V35.25C36.75 35.9404 37.3096 36.5 38 36.5C38.6904 36.5 39.25 35.9404 39.25 35.25V24ZM24 38L24.8839 38.8839L38.8839 24.8839L38 24L37.1161 23.1161L23.1161 37.1161L24 38Z"
                fill="white"
              />
            </svg>
          </a>

          {/* Capture Service */}
          <a
            href="/Product/Capture"
            className="group flex p-6 sm:p-8 flex-col items-start rounded-xl bg-[#0A1020] shadow-[0px_24px_48px_-12px_rgba(21,27,46,0.06)] lg:col-span-5 min-h-[280px] sm:min-h-[326px] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex pb-8 flex-col items-start shrink-0 w-14 h-[88px]">
              <div className="flex justify-center items-center shrink-0 rounded-xl bg-[rgba(32,85,255,0.22)] w-14 h-14">
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 20C1.8125 20 1.22396 19.7552 0.734375 19.2656C0.244792 18.776 0 18.1875 0 17.5V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H17.5C18.1875 0 18.776 0.244792 19.2656 0.734375C19.7552 1.22396 20 1.8125 20 2.5V8.125L25 3.125V16.875L20 11.875V17.5C20 18.1875 19.7552 18.776 19.2656 19.2656C18.776 19.7552 18.1875 20 17.5 20H2.5ZM2.5 17.5H17.5V2.5H2.5V17.5ZM2.5 17.5V2.5V17.5Z"
                    fill="#2055FF"
                  />
                </svg>
              </div>
            </div>
            <div className="flex pb-4 flex-col items-start">
              <p className="text-[#FFF] font-lufga text-2xl font-bold leading-7 max-w-[212px]">
                Capture Service
              </p>
            </div>
            <div className="flex pt-0 pr-[23px] pb-8 pl-0 flex-col items-start">
              <p className="text-[#5A6062] font-inter text-base leading-[26px] max-w-[255px]">
                High-fidelity communication tools designed for seamless global
                collaboration in any environment.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#2055FF] font-inter text-sm font-semibold leading-5">
                Learn more
              </p>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z"
                  fill="#2055FF"
                />
              </svg>
            </div>
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex justify-center items-center absolute right-0 top-0 w-[62px] h-[62px]"
            >
              <path
                d="M23.1161 37.1161C22.628 37.6043 22.628 38.3957 23.1161 38.8839C23.6043 39.372 24.3957 39.372 24.8839 38.8839L24 38L23.1161 37.1161ZM39.25 24C39.25 23.3096 38.6904 22.75 38 22.75H26.75C26.0596 22.75 25.5 23.3096 25.5 24C25.5 24.6904 26.0596 25.25 26.75 25.25H36.75V35.25C36.75 35.9404 37.3096 36.5 38 36.5C38.6904 36.5 39.25 35.9404 39.25 35.25V24ZM24 38L24.8839 38.8839L38.8839 24.8839L38 24L37.1161 23.1161L23.1161 37.1161L24 38Z"
                fill="white"
              />
            </svg>
          </a>

          {/* Hub & Avatar */}
          <a
            href="/Product/HubAvatar"
            className="group flex p-6 sm:p-8 flex-col items-start rounded-xl bg-[#0A1020] shadow-[0px_24px_48px_-12px_rgba(21,27,46,0.06)] lg:col-span-5 min-h-[280px] sm:min-h-[326px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute left-[30px] top-7 w-[62px] h-[63px] bg-[#2055FF] blur-[58px] z-0" />
            <div className="flex pb-8 flex-col items-start shrink-0 w-14 h-[88px] relative z-10">
              <div className="flex justify-center items-center shrink-0 rounded-xl bg-[rgba(32,85,255,0.31)] w-14 h-14">
                <svg
                  width="24"
                  height="31"
                  viewBox="0 0 24 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-[31px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8057 0H12.0208C16.2184 0 19.6213 3.40061 19.6213 7.59548V9.52254H20.2101C21.5122 9.52254 22.5676 10.5773 22.5676 11.8785C22.5676 13.1795 21.5122 14.2343 20.2101 14.2343H19.1975C18.5448 16.1003 17.1839 17.6341 15.4367 18.5141L15.4087 21.5977L20.4862 23.042C20.9346 23.1649 21.3222 23.3972 21.6006 23.5934C21.9072 23.8095 22.2042 24.0697 22.4712 24.3474C22.9583 24.8538 23.5539 25.636 23.77 26.5424C24.0356 27.6572 24.0473 28.6587 23.9257 29.449C23.7884 30.3407 23.0207 30.9988 22.118 30.9988H13.0134L11.1844 31H1.882C0.979239 31 0.211565 30.3417 0.0742561 29.4501C-0.0473749 28.6599 -0.0354863 27.6584 0.230116 26.5435C0.446073 25.6371 1.04169 24.855 1.52873 24.3486C1.79577 24.0709 2.09286 23.8107 2.39936 23.5946C2.67789 23.3984 3.06539 23.1661 3.51376 23.043L8.60633 21.5946V18.6189C6.75521 17.7592 5.30844 16.1767 4.62895 14.2343H2.98831C1.68629 14.2343 0.630806 13.1795 0.630806 11.8785C0.630806 10.5773 1.68629 9.52254 2.98831 9.52254H4.20514V7.59548C4.20514 3.40061 7.60807 0 11.8057 0ZM11.1697 25.5254C11.1696 25.5318 11.1696 25.5382 11.1696 25.5446V29.171C11.1696 29.1706 11.1696 29.1714 11.1696 29.171L9.35532 29.1722H1.882C1.81994 28.7686 1.80322 28.2514 1.882 27.6538C1.89533 27.5529 1.91139 27.4497 1.93034 27.3444C1.95255 27.2214 1.97868 27.0954 2.00938 26.9669C2.22155 26.0763 3.36731 24.9737 4.00395 24.804L8.64108 23.4851L9.52085 23.2349L10.0549 23.9768L11.1697 25.5254ZM13.0134 29.171V25.5458C13.0134 25.5378 13.0134 25.5299 13.0133 25.5219L13.9859 24.0035L14.4791 23.2338L15.3589 23.484L19.996 24.8029C20.6326 24.9725 21.7784 26.0752 21.9906 26.9658C22.0213 27.0944 22.0474 27.2202 22.0696 27.3432C22.0886 27.4486 22.1046 27.5517 22.118 27.6526C22.1967 28.2502 22.18 28.7675 22.118 29.171H14.8277H13.0134ZM12.0558 23.6263L11.0056 22.1675C10.8508 21.9525 10.6554 21.7787 10.4354 21.6519V19.1995C10.8798 19.2803 11.3379 19.3226 11.8057 19.3226H12.0208C12.5629 19.3226 13.0918 19.2658 13.6017 19.158L13.5791 21.6425C13.3252 21.7857 13.1037 21.9907 12.9387 22.2482L12.0558 23.6263ZM4.20514 11.3504H2.98831C2.69644 11.3504 2.45984 11.5868 2.45984 11.8785C2.45984 12.17 2.69644 12.4064 2.98831 12.4064H4.23506C4.21533 12.1827 4.20514 11.956 4.20514 11.7271V11.3504ZM19.6213 11.7271V11.3504H20.2101C20.502 11.3504 20.7386 11.5868 20.7386 11.8785C20.7386 12.17 20.502 12.4064 20.2101 12.4064H19.5913C19.6111 12.1827 19.6213 11.956 19.6213 11.7271ZM11.8057 1.82781C8.61822 1.82781 6.03418 4.41008 6.03418 7.59548V7.74722H10.6641C11.3726 7.74722 11.8629 7.63117 12.1544 7.41655C12.3758 7.25343 12.635 6.92018 12.594 6.03148C12.5706 5.52728 12.9609 5.09968 13.4653 5.07641C13.7046 5.06538 13.9267 5.14728 14.0966 5.29023C14.3371 5.4649 14.4879 5.75325 14.4731 6.07228C14.4321 6.96098 14.6913 7.29423 14.9127 7.45735C15.2041 7.67197 15.6945 7.78802 16.4029 7.78802H17.3738C17.5246 7.78802 17.6669 7.8245 17.7923 7.8891V7.59548C17.7923 4.41008 15.2082 1.82781 12.0208 1.82781H11.8057ZM17.7923 9.51471V11.7271C17.7923 14.9125 15.2082 17.4948 12.0208 17.4948H11.8057C8.61822 17.4948 6.03418 14.9125 6.03418 11.7271V9.57502H10.6641C11.4835 9.57502 12.4657 9.45792 13.2395 8.8879C13.3365 8.81648 13.4275 8.74011 13.5126 8.65877C13.6097 8.75551 13.7146 8.84547 13.8276 8.92863C14.6014 9.49865 15.5836 9.61589 16.4029 9.61589H17.3738C17.5246 9.61589 17.6669 9.57933 17.7923 9.51471Z"
                    fill="#377DFF"
                  />
                </svg>
              </div>
            </div>
            <div className="flex pb-4 flex-col items-start relative z-10">
              <p className="text-[#FFF] font-lufga text-2xl font-bold leading-7 max-w-full lg:max-w-[172px]">
                Hub &amp; Avatar
              </p>
            </div>
            <div className="flex pt-0 pr-0 lg:pr-[52px] pb-8 pl-0 flex-col items-start relative z-10">
              <p className="text-[#777] font-inter text-base leading-[26px] max-w-full lg:max-w-[226px]">
                Precision spatial mapping for complex architectural spaces,
                ensuring you're never lost.
              </p>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <p className="text-[#2055FF] font-inter text-sm font-semibold leading-5">
                Learn more
              </p>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z"
                  fill="#2055FF"
                />
              </svg>
            </div>
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex justify-center items-center absolute right-0 top-0 w-[62px] h-[62px] z-10"
            >
              <path
                d="M23.1161 37.1161C22.628 37.6043 22.628 38.3957 23.1161 38.8839C23.6043 39.372 24.3957 39.372 24.8839 38.8839L24 38L23.1161 37.1161ZM39.25 24C39.25 23.3096 38.6904 22.75 38 22.75H26.75C26.0596 22.75 25.5 23.3096 25.5 24C25.5 24.6904 26.0596 25.25 26.75 25.25H36.75V35.25C36.75 35.9404 37.3096 36.5 38 36.5C38.6904 36.5 39.25 35.9404 39.25 35.25V24ZM24 38L24.8839 38.8839L38.8839 24.8839L38 24L37.1161 23.1161L23.1161 37.1161L24 38Z"
                fill="white"
              />
            </svg>
          </a>

          {/* CGI */}
          <a
            href="/Product/CgiRendering"
            className="group flex p-6 sm:p-8 flex-col items-start rounded-xl bg-[#0A1020] shadow-[0px_24px_48px_-12px_rgba(21,27,46,0.06)] lg:col-span-7 min-h-[280px] sm:min-h-[326px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute left-[30px] top-7 w-[62px] h-[63px] bg-[#2055FF] blur-[58px] z-0" />
            <div className="flex pb-8 flex-col items-start shrink-0 w-14 h-[88px] relative z-10">
              <div className="flex justify-center items-center shrink-0 rounded-xl bg-[rgba(32,85,255,0.22)] w-14 h-14">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 21.8438L5 18.25C4.60417 18.0208 4.29688 17.7188 4.07812 17.3438C3.85938 16.9688 3.75 16.5521 3.75 16.0938V8.90625C3.75 8.44792 3.85938 8.03125 4.07812 7.65625C4.29688 7.28125 4.60417 6.97917 5 6.75L11.25 3.15625C11.6458 2.92708 12.0625 2.8125 12.5 2.8125C12.9375 2.8125 13.3542 2.92708 13.75 3.15625L20 6.75C20.3958 6.97917 20.7031 7.28125 20.9219 7.65625C21.1406 8.03125 21.25 8.44792 21.25 8.90625V16.0938C21.25 16.5521 21.1406 16.9688 20.9219 17.3438C20.7031 17.7188 20.3958 18.0208 20 18.25L13.75 21.8438C13.3542 22.0729 12.9375 22.1875 12.5 22.1875C12.0625 22.1875 11.6458 22.0729 11.25 21.8438ZM11.25 18.9688V13.2188L6.25 10.3125V16.0938L11.25 18.9688ZM13.75 18.9688L18.75 16.0938V10.3125L13.75 13.2188V18.9688ZM0 6.25V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H6.25V2.5H2.5V6.25H0ZM6.25 25H2.5C1.8125 25 1.22396 24.7552 0.734375 24.2656C0.244792 23.776 0 23.1875 0 22.5V18.75H2.5V22.5H6.25V25ZM18.75 25V22.5H22.5V18.75H25V22.5C25 23.1875 24.7552 23.776 24.2656 24.2656C23.776 24.7552 23.1875 25 22.5 25H18.75ZM22.5 6.25V2.5H18.75V0H22.5C23.1875 0 23.776 0.244792 24.2656 0.734375C24.7552 1.22396 25 1.8125 25 2.5V6.25H22.5ZM12.5 11.0625L17.4375 8.15625L12.5 5.3125L7.5625 8.15625L12.5 11.0625Z"
                    fill="#2055FF"
                  />
                </svg>
              </div>
            </div>
            <div className="flex pb-4 flex-col items-start relative z-10">
              <p className="text-[#FFF] font-lufga text-2xl font-bold leading-7 max-w-full lg:max-w-[172px]">
                CGI
              </p>
            </div>
            <div className="flex pt-0 pr-0 lg:pr-[90px] pb-8 pl-0 flex-col items-start relative z-10">
              <p className="text-[#777] font-inter text-base leading-[26px] max-w-full lg:max-w-[180px]">
                Precision spatial mapping for complex architectural spaces,
                ensuring you're never lost.
              </p>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <p className="text-[#2055FF] font-inter text-sm font-semibold leading-5">
                Learn more
              </p>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z"
                  fill="#2055FF"
                />
              </svg>
            </div>
            <img
              src="/brand/products/images/cgi.png"
              className="hidden lg:block absolute right-[29px] -bottom-1 w-[300px] h-[288px] max-w-none transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
              alt="CGI"
            />
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex justify-center items-center absolute right-0 top-0 w-[62px] h-[62px] z-10"
            >
              <path
                d="M23.1161 37.1161C22.628 37.6043 22.628 38.3957 23.1161 38.8839C23.6043 39.372 24.3957 39.372 24.8839 38.8839L24 38L23.1161 37.1161ZM39.25 24C39.25 23.3096 38.6904 22.75 38 22.75H26.75C26.0596 22.75 25.5 23.3096 25.5 24C25.5 24.6904 26.0596 25.25 26.75 25.25H36.75V35.25C36.75 35.9404 37.3096 36.5 38 36.5C38.6904 36.5 39.25 35.9404 39.25 35.25V24ZM24 38L24.8839 38.8839L38.8839 24.8839L38 24L37.1161 23.1161L23.1161 37.1161L24 38Z"
                fill="white"
              />
            </svg>
          </a>

          {/* Home Staging */}
          <a
            href="/Product/Homestaging"
            className="group flex p-6 sm:p-8 flex-col items-start rounded-xl bg-[#0A1020] shadow-[0px_24px_48px_-12px_rgba(21,27,46,0.06)] sm:col-span-2 lg:col-span-12 min-h-[280px] sm:min-h-[326px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute left-[30px] top-7 w-[62px] h-[63px] bg-[#2055FF] blur-[58px] z-0" />
            <div className="flex pb-8 flex-col items-start shrink-0 w-14 h-[88px] relative z-10">
              <div className="flex justify-center items-center shrink-0 rounded-xl bg-[rgba(32,85,255,0.22)] w-14 h-14">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 22.5V5H5V0H17.5V10H22.5V22.5H12.5V17.5H10V22.5H0ZM2.5 20H5V17.5H2.5V20ZM2.5 15H5V12.5H2.5V15ZM2.5 10H5V7.5H2.5V10ZM7.5 15H10V12.5H7.5V15ZM7.5 10H10V7.5H7.5V10ZM7.5 5H10V2.5H7.5V5ZM12.5 15H15V12.5H12.5V15ZM12.5 10H15V7.5H12.5V10ZM12.5 5H15V2.5H12.5V5ZM17.5 20H20V17.5H17.5V20ZM17.5 15H20V12.5H17.5V15Z"
                    fill="#2055FF"
                  />
                </svg>
              </div>
            </div>
            <div className="flex pb-4 flex-col items-start relative z-10">
              <p className="text-[#FFF] font-lufga text-2xl font-bold leading-7 max-w-full lg:max-w-[172px]">
                Home Staging
              </p>
            </div>
            <div className="flex w-full pt-0 pr-0 pb-8 pl-px justify-start lg:justify-end items-center lg:w-[412px] relative z-10">
              <p className="text-[#777] font-inter text-base leading-[26px] max-w-full lg:max-w-[420px]">
                Precision spatial mapping for complex architectural spaces,
                ensuring you're never lost.
              </p>
            </div>
            <div className="flex items-center gap-2 relative z-10">
              <p className="text-[#2055FF] font-inter text-sm font-semibold leading-5">
                Learn more
              </p>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.10208 5.25H0V4.08333H7.10208L3.83542 0.816667L4.66667 0L9.33333 4.66667L4.66667 9.33333L3.83542 8.51667L7.10208 5.25Z"
                  fill="#2055FF"
                />
              </svg>
            </div>
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex justify-center items-center absolute right-0 top-0 w-[62px] h-[62px] z-10"
            >
              <path
                d="M23.1161 37.1161C22.628 37.6043 22.628 38.3957 23.1161 38.8839C23.6043 39.372 24.3957 39.372 24.8839 38.8839L24 38L23.1161 37.1161ZM39.25 24C39.25 23.3096 38.6904 22.75 38 22.75H26.75C26.0596 22.75 25.5 23.3096 25.5 24C25.5 24.6904 26.0596 25.25 26.75 25.25H36.75V35.25C36.75 35.9404 37.3096 36.5 38 36.5C38.6904 36.5 39.25 35.9404 39.25 35.25V24ZM24 38L24.8839 38.8839L38.8839 24.8839L38 24L37.1161 23.1161L23.1161 37.1161L24 38Z"
                fill="white"
              />
            </svg>
            <img
              src="/brand/products/images/staging.png"
              className="hidden lg:block absolute right-[52px] bottom-[13px] w-[438px] h-[285px] max-w-none z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
              alt="Home Staging"
            />
          </a>
        </RevealStagger>
      </div>
    </section>
  );
}
