import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Go Custom or Go Streamlined Section */}
      <section className="bg-[#F6F6F6] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
                Go custom or go streamlined!
              </h1>
              <p className="text-2xl lg:text-3xl text-black leading-relaxed">
                If you have your own vulnerability management tools, we can connect them to our platform for risk-based analysis. Alternatively, we can build a custom risk-based vulnerability management solution using our native platform.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-4 bg-[#FFE034] border-2 border-[#FFE034] text-[#00539A] text-sm font-bold rounded-full hover:bg-yellow-300 transition-colors"
              >
                Contact Now
              </Link>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c29624f8d9efe30cf8fc9e3a0493ccaa4372c0d0?width=1258" 
                alt="Integrations" 
                className="w-full max-w-[629px] h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-[#EAEAEA] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Our Mission and Vision
            </p>
            <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight max-w-4xl mx-auto">
              We are set out on a mission to conquer cyber security challenges.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Statement */}
            <div className="bg-white p-16">
              <div className="mb-16">
                <svg className="w-24 h-24 mb-16" viewBox="0 0 98 98" fill="none">
                  <path d="M70.8 61.58H96.2V36.28H70.8M96.2 26.78V1.48H70.8M1 48.98C1 55.98 6.7 61.68 13.7 61.68C20.7 61.68 26.4 55.98 26.4 48.98C26.4 41.98 20.7 36.28 13.7 36.28M13.7 26.78C20.7 26.78 26.4 21.08 26.4 14.08C26.4 7.08 20.7 1.48 13.7 1.48M35.9 61.58H61.3L48.6 36.28M61.3 26.78L48.6 1.48M26.4 83.78C26.4 90.78 20.7 96.48 13.7 96.48C6.7 96.48 1 90.78 1 83.78C1 76.78 6.7 71.08 13.7 71.08C20.7 71.08 26.4 76.78 26.4 83.78ZM96.2 71.08H70.8V96.38H96.2V71.08ZM35.9 96.48H61.3L48.6 71.08L35.9 96.48Z" stroke="black" strokeWidth="2" strokeMiterlimit="20.2083" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-8">Mission Statement</h3>
              <p className="text-base text-black leading-8">
                Security is getting more nuanced and more sophisticated every day. WeSecureApp has envisioned solutions to help solve the incredible challenges of cyber security in the global landscape. With our strong foothold in providing exceptional security solutions since our creation, we are set out on a mission to provide customized security solutions to modern enterprises.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-white p-16">
              <div className="mb-12">
                <svg className="w-30 h-20 mb-12" viewBox="0 0 122 80" fill="none">
                  <path d="M90.9992 39.9498C90.9992 45.8831 89.2398 51.6831 85.9435 56.6164C82.6471 61.5497 77.9619 65.3948 72.4803 67.6653C66.9987 69.9359 60.9669 70.53 55.1476 69.3725C49.3283 68.215 43.983 65.3578 39.7876 61.1624C35.5921 56.9669 32.735 51.6216 31.5775 45.8023C30.4199 39.9831 31.014 33.9513 33.2846 28.4696C35.5551 22.988 39.4002 18.3028 44.3335 15.0065C49.2669 11.7101 55.0669 9.95071 61.0001 9.95071C68.9564 9.95071 76.5868 13.1113 82.2127 18.7372C87.8386 24.3632 90.9992 31.9935 90.9992 39.9498ZM61.0001 24.9503C58.0335 24.9503 55.1335 25.83 52.6668 27.4781C50.2002 29.1263 48.2776 31.4689 47.1424 34.2097C46.0071 36.9505 45.71 39.9664 46.2888 42.8761C46.8676 45.7857 48.2961 48.4584 50.3939 50.5561C52.4916 52.6538 55.1642 54.0824 58.0739 54.6611C60.9835 55.2399 63.9994 54.9429 66.7402 53.8076C69.481 52.6723 71.8236 50.7498 73.4718 48.2831C75.12 45.8164 75.9997 42.9164 75.9997 39.9498C75.9997 35.9717 74.4194 32.1565 71.6064 29.3435C68.7935 26.5306 64.9783 24.9503 61.0001 24.9503ZM1.00195 39.9498C1.00195 39.9498 16.9015 78.5206 61.0001 78.5206C105.099 78.5206 120.998 39.9508 120.998 39.9508C120.998 39.9508 105.099 1.37997 61.0001 1.37997C16.9015 1.37997 1.00195 39.9498 1.00195 39.9498Z" stroke="black" strokeWidth="1.99994" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-8">Vision Statement</h3>
              <p className="text-base text-black leading-8">
                WeSecureApp is helping organizations in minimizing the threat landscape which gets inherited with industry and business domain. Having attained industry expertise, WeSecureApp addresses the challenges with a thoughtful and pragmatic approach with the use of unique technological and managed solutions that are designed and developed internally. With the aim of addressing security challenges for Start-ups, SME's and Enterprises, WeSecureApp offers unparalleled security consulting, auditing and testing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              What Defines Us?
            </p>
            <h2 className="text-5xl lg:text-6xl font-normal text-black">Our Principles</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Principle 1 */}
            <div className="bg-[#F7F7F7] p-16 relative">
              <div className="absolute top-16 right-16 text-sm text-gray-500 font-medium">01</div>
              <div className="mb-16">
                <svg className="w-24 h-24" viewBox="0 0 102 110" fill="none">
                  <path d="M43.848 26.281L33.13 44.851M33.166 65.466L22.444 46.895M51.036 75.74H29.59M58.146 83.98L65.294 96.36L58.146 108.74H43.846L36.698 96.36L43.846 83.98H58.146ZM58.146 83.98L68.87 65.408M68.834 44.794L79.556 63.364M72.408 34.515L79.556 22.135H93.856L101.004 34.515L93.856 46.895H79.556L72.408 34.515ZM72.408 34.515H50.964M58.148 1.52002L65.296 13.9L58.148 26.28H43.848L36.704 13.9L43.852 1.52002H58.148ZM1 34.515L8.148 46.895H22.448L29.59 34.515L22.442 22.135H8.142L1 34.515ZM8.148 88.12H22.448L29.59 75.744L22.442 63.364H8.142L1 75.744L8.148 88.12ZM101 75.744L93.852 63.364H79.552L72.404 75.744L79.556 88.12H93.856L101 75.744Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-8">We Adopt Secure Practices</h3>
              <p className="text-base text-black leading-8">
                Today, the security of data in the digital world is the most crucial task. At WeSecureApp, we understand how important data security is to every client, and so we offer equally reliable services. Your data and information stay safe with us and it is not at the risk of being misused in any sense.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-[#F7F7F7] p-16 relative">
              <div className="absolute top-16 right-16 text-sm text-gray-500 font-medium">02</div>
              <div className="mb-16">
                <svg className="w-24 h-24" viewBox="0 0 102 110" fill="none">
                  <path d="M43.848 26.281L33.13 44.851M33.166 65.466L22.444 46.895M51.036 75.74H29.59M58.146 83.98L65.294 96.36L58.146 108.74H43.846L36.698 96.36L43.846 83.98H58.146ZM58.146 83.98L68.87 65.408M68.834 44.794L79.556 63.364M72.408 34.515L79.556 22.135H93.856L101.004 34.515L93.856 46.895H79.556L72.408 34.515ZM72.408 34.515H50.964M58.148 1.52002L65.296 13.9L58.148 26.28H43.848L36.704 13.9L43.852 1.52002H58.148ZM1 34.515L8.148 46.895H22.448L29.59 34.515L22.442 22.135H8.142L1 34.515ZM8.148 88.12H22.448L29.59 75.744L22.442 63.364H8.142L1 75.744L8.148 88.12ZM101 75.744L93.852 63.364H79.552L72.404 75.744L79.556 88.12H93.856L101 75.744Z" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-8">We Adopt Secure Practices</h3>
              <p className="text-base text-black leading-8">
                Today, the security of data in the digital world is the most crucial task. At WeSecureApp, we understand how important data security is to every client, and so we offer equally reliable services. Your data and information stay safe with us and it is not at the risk of being misused in any sense.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-[#F7F7F7] p-16 relative">
              <div className="absolute top-16 right-16 text-sm text-gray-500 font-medium">02</div>
              <div className="mb-12">
                <svg className="w-24 h-24" viewBox="0 0 102 103" fill="none">
                  <path d="M61.7139 51.728H100.996L51.001 101.662H1.00586V51.667M51.001 27.7913V49.2172M56.6614 21.209L38.1022 10.493M35.2315 2.30081L16.6793 13.0138M8.14816 11.3999V32.8258M21.0469 50.1241L2.48771 39.4112M42.4698 47.6034L23.9146 58.3163M58.1433 30.3081C58.1433 35.9583 56.4678 41.4816 53.3287 46.1796C50.1896 50.8776 45.728 54.5393 40.5079 56.7015C35.2878 58.8638 29.5437 59.4296 24.002 58.3274C18.4604 57.2252 13.37 54.5044 9.37464 50.5092C5.37927 46.514 2.65833 41.4237 1.55591 35.8821C0.453488 30.3404 1.01909 24.5964 3.1812 19.3762C5.3433 14.156 9.00481 9.6942 13.7027 6.55496C18.4006 3.41573 23.9238 1.74007 29.5741 1.73987C37.1508 1.74013 44.4172 4.75004 49.7749 10.1075C55.1326 15.465 58.1427 22.7313 58.1433 30.3081Z" stroke="black" strokeWidth="1.9998" strokeMiterlimit="10" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-8">We Take Ownership For Our Work</h3>
              <p className="text-base text-black leading-8">
                Every task carried out by our team is done so with full honesty, efficiency, and integrity. We take ownership of every project and work on it like it is our own, which enables us to offer correct advice, deliver the right information, work with ethics, and never compromise user information.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="bg-[#F7F7F7] p-16 relative">
              <div className="absolute top-16 right-16 text-sm text-gray-500 font-medium">03</div>
              <div className="mb-12">
                <svg className="w-24 h-24" viewBox="0 0 101 100" fill="none">
                  <path d="M47.084 37.0821L46.708 37.7711C45.7709 39.3712 44.2399 40.5365 42.448 41.0137C40.6561 41.4908 38.7483 41.2411 37.1395 40.319C36.3437 39.8672 35.6453 39.2623 35.0847 38.539C34.5241 37.8158 34.1124 36.9886 33.8733 36.1053C33.6343 35.222 33.5726 34.3 33.692 33.3928C33.8113 32.4855 34.1093 31.6109 34.5687 30.8194L48.422 6.89062M73.5117 41.2979C73.5117 43.0463 74.2063 44.723 75.4425 45.9593C76.6788 47.1956 78.3555 47.8901 80.1039 47.8901C81.8522 47.8901 83.529 47.1956 84.7653 45.9593C86.0015 44.723 86.6961 43.0463 86.6961 41.2979V21.5209M60.3304 41.2979C60.3304 43.0463 61.0249 44.723 62.2612 45.9593C63.4975 47.1956 65.1742 47.8901 66.9226 47.8901C68.6709 47.8901 70.3476 47.1956 71.5839 45.9593C72.8202 44.723 73.5147 43.0463 73.5147 41.2979V21.5209" stroke="black" strokeWidth="1.9999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M60.3281 21.5209V61.0729C60.3281 62.8212 59.6335 64.498 58.3973 65.7343C57.161 66.9705 55.4842 67.6651 53.7359 67.6651C51.9875 67.6651 50.3108 66.9705 49.0745 65.7343C47.8382 64.498 47.1437 62.8212 47.1437 61.0729V11.7643C47.149 10.4433 47.4143 9.13623 47.9247 7.91776C48.4351 6.69929 49.1805 5.59328 50.1183 4.66288C51.0562 3.73249 52.1681 2.99592 53.3905 2.49524C54.613 1.99456 55.9222 1.73957 57.2432 1.74483H89.7846C91.1056 1.73957 92.4148 1.99456 93.6373 2.49524C94.8597 2.99592 95.9716 3.73249 96.9095 4.66288C97.8473 5.59328 98.5927 6.69929 99.1031 7.91776C99.6135 9.13623 99.8789 10.4433 99.8841 11.7643V41.2969C99.8841 43.0452 99.1896 44.722 97.9533 45.9582C96.717 47.1945 95.0403 47.889 93.2919 47.889C91.5436 47.889 89.8668 47.1945 88.6305 45.9582C87.3943 44.722 86.6998 43.0452 86.6998 41.2969M25.7198 61.6339H9.23959L1 75.9052L9.23959 90.1764H25.7198L33.9594 75.9052L25.7198 61.6339Z" stroke="black" strokeWidth="1.9999" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.9511 71.6234L31.4866 51.6434M4.29492 98.7401L9.23868 90.1775" stroke="black" strokeWidth="1.9999" strokeMiterlimit="10" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black mb-8">We Meet Industry Benchmarks</h3>
              <p className="text-base text-black leading-8">
                While there are various ways, methods, and approaches for accomplishing a task, our aim is to achieve everything with the best industry recommended methods. This way we are able to convey enhanced reports, and follow a professional approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="bg-[#F6F6F6] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Proactive Asset Management */}
            <div className="bg-white border border-[#E6E6E6] p-8">
              <div className="mb-16">
                <svg className="w-16 h-16" viewBox="0 0 60 61" fill="none">
                  <path d="M31.8742 53.695H1.87422C1.50109 53.695 1.19922 53.3931 1.19922 53.02V13.645C1.19922 13.465 1.27047 13.2943 1.39609 13.1687L12.6461 1.91872C12.7736 1.79122 12.9442 1.71997 13.1242 1.71997H41.2492C41.6223 1.71997 41.9242 2.02185 41.9242 2.39497V24.895H40.5742V3.06997H13.7992V13.645C13.7992 14.0181 13.4973 14.32 13.1242 14.32H2.54922V52.345H31.8742V53.695ZM3.50359 12.97H12.4492V4.02435L3.50359 12.97ZM30.9367 42.445H7.49922V41.095H30.9367V42.445ZM30.9367 36.82H7.49922V35.47H30.9367V36.82ZM30.9367 31.195H7.49922V29.845H30.9367V31.195ZM35.6242 25.57H7.49922V24.22H35.6242V25.57ZM46.8742 59.32C40.2986 59.32 34.9492 53.9687 34.9492 47.395V33.8518L46.8742 27.8893L58.7992 33.8518V47.395C58.7992 53.9706 53.4498 59.32 46.8742 59.32ZM36.2992 34.6881V47.395C36.2992 53.2262 41.0411 57.97 46.8742 57.97C52.7073 57.97 57.4492 53.2281 57.4492 47.395V34.6881L46.8742 29.3987L36.2992 34.6881Z" fill="black"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black uppercase mb-8">Proactive Asset Management</h3>
              <div className="space-y-4">
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Asset Discovery</span>: It's about finding all the devices, applications, data stores, and even cloud resources that exist within your IT environment.
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Asset Classification:</span> Once you've discovered all your assets, it's time to categorize them based on their importance and sensitivity. This is like sorting your belongings into different boxes based on their business criticality, business sensitivity and vulnerability level.
                </p>
              </div>
            </div>

            {/* Continuous Vulnerability Scanning */}
            <div className="bg-white border border-[#E6E6E6] p-8">
              <div className="mb-16">
                <svg className="w-16 h-16" viewBox="0 0 60 61" fill="none">
                  <path d="M10.773 39.4168L12.1698 38.02L10.773 36.6231L11.7273 35.6668L13.1242 37.0656L14.523 35.6668L15.4773 36.6231L14.0786 38.02L15.4755 39.4168L14.5211 40.3731L13.1242 38.9743L11.7255 40.3731L10.773 39.4168ZM50.1461 28.1687L48.7492 29.5656L47.3523 28.1687L46.3961 29.1231L47.7948 30.52L46.3961 31.9187L47.3523 32.8731L48.7492 31.4762L50.1461 32.8731L51.1023 31.9187L49.7036 30.52L51.1023 29.1212L50.1461 28.1687ZM58.7992 30.52C58.7992 46.4012 45.8786 59.32 29.9992 59.32C14.1198 59.32 1.19922 46.4012 1.19922 30.52C1.19922 14.6387 14.118 1.71997 29.9992 1.71997C37.4655 1.71997 44.4986 4.54185 49.8817 9.6831L52.023 7.54185L52.9792 8.49622L32.2061 29.2656C32.4198 29.6387 32.5492 30.0625 32.5492 30.52C32.5492 31.9262 31.4055 33.07 29.9992 33.07C28.593 33.07 27.4492 31.9262 27.4492 30.52C27.4492 29.1137 28.593 27.97 29.9992 27.97C30.4567 27.97 30.8805 28.1012 31.2517 28.3131L35.6542 23.9087C33.2542 21.85 29.7817 21.3025 26.8492 22.435C26.8942 22.6243 26.9242 22.8175 26.9242 23.02C26.9242 24.4262 25.7805 25.57 24.3742 25.57C23.9205 25.57 23.5023 25.4406 23.133 25.2325C21.9648 26.7493 21.2992 28.5925 21.2992 30.52C21.2992 35.3181 25.203 39.22 29.9992 39.22C34.7955 39.22 38.6992 35.3181 38.6992 30.52H40.0511C40.0511 36.0606 35.5417 40.57 30.0011 40.57C24.4586 40.57 19.9511 36.0606 19.9511 30.52C19.9511 28.2362 20.7555 26.05 22.1692 24.2743C21.9555 23.9031 21.8242 23.4793 21.8242 23.02C21.8242 21.6137 22.968 20.47 24.3742 20.47C25.0886 20.47 25.7336 20.7681 26.1967 21.2425C29.6542 19.8362 33.7886 20.4812 36.6123 22.9525L42.2936 17.2712C38.9411 14.1531 34.5986 12.445 29.9992 12.445C20.0336 12.445 11.9242 20.5543 11.9242 30.52C11.9242 31.7481 12.048 32.9743 12.2917 34.1631L10.9698 34.435C10.7073 33.1543 10.5742 31.8381 10.5742 30.52C10.5742 19.81 19.2873 11.095 29.9992 11.095C34.9605 11.095 39.6405 12.9437 43.2498 16.315L48.9255 10.6393C43.7992 5.7531 37.1055 3.06997 29.9992 3.06997C14.8623 3.06997 2.54922 15.3831 2.54922 30.52C2.54922 45.655 14.8623 57.97 29.9992 57.97C45.1342 57.97 57.4492 45.6568 57.4492 30.52H58.7992ZM25.5742 23.02C25.5742 22.3581 25.0361 21.82 24.3742 21.82C23.7123 21.82 23.1742 22.3581 23.1742 23.02C23.1742 23.6818 23.7123 24.22 24.3742 24.22C25.0361 24.22 25.5742 23.6818 25.5742 23.02ZM31.1992 30.52C31.1992 29.8581 30.6611 29.32 29.9992 29.32C29.3373 29.32 28.7992 29.8581 28.7992 30.52C28.7992 31.1818 29.3373 31.72 29.9992 31.72C30.6611 31.72 31.1992 31.1818 31.1992 30.52ZM29.9992 49.945C39.1998 49.945 47.208 43.4087 49.0342 34.4031L47.7123 34.135C46.0117 42.5125 38.5605 48.595 29.9992 48.595C24.2598 48.595 18.9892 45.9606 15.5392 41.3668L14.4592 42.1768C18.1661 47.1137 23.8305 49.945 29.9992 49.945Z" fill="black"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black uppercase mb-8">Continuous Vulnerability Scanning</h3>
              <div className="space-y-4">
                <p className="text-base text-black leading-8">
                  VMaaS employs a range of scanning techniques to comprehensively assess your digital environment, like
                </p>
                <div className="space-y-4">
                  <p className="text-base text-black leading-8">
                    <span className="font-bold">Network scanners:</span> These digital detectives scour your network ports and protocols, sniffing out open vulnerabilities like unlocked doors.
                  </p>
                  <p className="text-base text-black leading-8">
                    <span className="font-bold">Web scanners:</span> They crawl your websites and web applications, hunting for hidden security weaknesses, like unpatched software or misconfigurations.
                  </p>
                  <p className="text-base text-black leading-8">
                    <span className="font-bold">Database scanners:</span> These data guardians analyze your databases, ensuring sensitive information isn't vulnerable to unauthorized access.
                  </p>
                  <p className="text-base text-black leading-8">
                    <span className="font-bold">Agent-based scanners:</span> These resident security guards live on your devices, continuously monitoring for vulnerabilities in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vulnerability Prioritization */}
            <div className="bg-white border border-[#E6E6E6] p-8">
              <div className="mb-16">
                <svg className="w-16 h-16" viewBox="0 0 60 61" fill="none">
                  <path d="M58.1242 58.88H24.3742V57.53H58.1242V58.88ZM7.49922 56.0675C5.57734 56.0675 4.01172 54.5019 4.01172 52.58C4.01172 50.8888 5.22297 49.4732 6.82422 49.1582V34.9269C4.44484 34.5969 2.60547 32.5494 2.60547 30.08C2.60547 27.6107 4.44297 25.5632 6.82422 25.2332V13.8444C3.66672 13.5069 1.19922 10.8257 1.19922 7.58003C1.19922 4.10565 4.02484 1.28003 7.49922 1.28003C10.9736 1.28003 13.7992 4.10565 13.7992 7.58003C13.7992 10.8257 11.3317 13.5069 8.17422 13.8444V25.2332C10.548 25.5707 12.393 27.635 12.393 30.08C12.393 32.5494 10.5555 34.5969 8.17422 34.9269V49.16C9.77172 49.4807 10.9867 50.9057 10.9867 52.58C10.9867 54.5019 9.42109 56.0675 7.49922 56.0675ZM7.49922 50.4425C6.32172 50.4425 5.36172 51.4007 5.36172 52.58C5.36172 53.7594 6.32172 54.7175 7.49922 54.7175C8.67672 54.7175 9.63672 53.7594 9.63672 52.58C9.63672 51.4307 8.69922 50.4725 7.54797 50.4425H7.49922ZM7.49922 26.5363C5.54547 26.5363 3.95547 28.1263 3.95547 30.08C3.95547 32.0338 5.54547 33.6238 7.49922 33.6238C9.45297 33.6238 11.043 32.0338 11.043 30.08C11.043 28.1713 9.48859 26.5832 7.57422 26.5363H7.49922ZM7.49922 2.63003C4.76922 2.63003 2.54922 4.85003 2.54922 7.58003C2.54922 10.31 4.76922 12.53 7.49922 12.53C10.2292 12.53 12.4492 10.31 12.4492 7.58003C12.4492 4.85003 10.2292 2.63003 7.49922 2.63003ZM58.1242 53.255H24.3742V51.905H58.1242V53.255ZM58.1242 47.63H24.3742V46.28H58.1242V47.63ZM58.1242 36.38H24.3742V35.03H58.1242V36.38ZM58.1242 30.755H24.3742V29.405H58.1242V30.755ZM58.1242 25.13H24.3742V23.78H58.1242V25.13ZM58.1242 13.88H24.3742V12.53H58.1242V13.88ZM58.1242 8.25503H24.3742V6.90503H58.1242V8.25503ZM58.1242 2.63003H24.3742V1.28003H58.1242V2.63003Z" fill="black"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black uppercase mb-8">Vulnerability Prioritization</h3>
              <div className="space-y-4">
                <p className="text-base text-black leading-8">
                  Once vulnerabilities are identified, VMaaS assesses their severity based on:
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">The exploitability of the vulnerability</span>: Is it easy for attackers to exploit?
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">The potential impact:</span> What kind of damage could it cause to your systems and data?
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">The availability of patches and workarounds</span>: Can it be easily fixed?
                </p>
              </div>
            </div>

            {/* Remediation Guidance */}
            <div className="bg-white border border-[#E6E6E6] p-8">
              <div className="mb-16">
                <svg className="w-16 h-16" viewBox="0 0 61 61" fill="none">
                  <path d="M11.9409 49.1189C6.85594 44.0339 4.05469 37.2727 4.05469 30.0802C4.05469 22.8877 6.85594 16.1264 11.9409 11.0414L12.8953 11.9958C8.06531 16.8258 5.40469 23.2477 5.40469 30.0802C5.40469 36.9127 8.06531 43.3346 12.8953 48.1646L11.9409 49.1189ZM50.0184 49.1189L49.0622 48.1627C53.8922 43.3327 56.5528 36.9108 56.5528 30.0783C56.5528 23.2477 53.8922 16.8258 49.0622 11.9939L50.0184 11.0396C55.1034 16.1264 57.9047 22.8896 57.9047 30.0802C57.9047 37.2727 55.1034 44.0321 50.0184 49.1189ZM30.9797 45.7552C22.3359 45.7552 15.3047 38.7221 15.3047 30.0802C15.3047 21.4364 22.3359 14.4052 30.9797 14.4052C39.6216 14.4052 46.6547 21.4364 46.6547 30.0802C46.6547 38.7221 39.6216 45.7552 30.9797 45.7552ZM30.9797 15.7552C23.0803 15.7552 16.6547 22.1808 16.6547 30.0802C16.6547 37.9796 23.0803 44.4052 30.9797 44.4052C38.8791 44.4052 45.3047 37.9796 45.3047 30.0802C45.3047 22.1808 38.8791 15.7552 30.9797 15.7552ZM46.0416 45.1421L45.0853 44.1858C48.8541 40.4189 50.9278 35.4071 50.9278 30.0802C50.9278 24.7533 48.8541 19.7414 45.0853 15.9727L46.0416 15.0183C50.0653 19.0421 52.2797 24.3914 52.2797 30.0802C52.2797 35.7689 50.0653 41.1202 46.0416 45.1421ZM15.9178 45.1421C11.8959 41.1202 9.67969 35.7689 9.67969 30.0802C9.67969 24.3914 11.8959 19.0421 15.9178 15.0183L16.8722 15.9727C13.1053 19.7414 11.0297 24.7514 11.0297 30.0802C11.0297 35.4089 13.1053 40.4208 16.8722 44.1858L15.9178 45.1421ZM30.9797 32.6302C29.5734 32.6302 28.4297 31.4864 28.4297 30.0802C28.4297 28.6739 29.5734 27.5302 30.9797 27.5302C32.3859 27.5302 33.5297 28.6739 33.5297 30.0802C33.5297 31.4864 32.3859 32.6302 30.9797 32.6302ZM30.9797 28.8802C30.3178 28.8802 29.7797 29.4183 29.7797 30.0802C29.7797 30.7421 30.3178 31.2802 30.9797 31.2802C31.6416 31.2802 32.1797 30.7421 32.1797 30.0802C32.1797 29.4183 31.6416 28.8802 30.9797 28.8802Z" fill="black"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black uppercase mb-8">Remediation Guidance</h3>
              <div className="space-y-4">
                <p className="text-base text-black leading-8">
                  VMaaS provides actionable steps to fix the vulnerabilities, including:
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Links to patches or updates:</span> Apply them promptly to close the security holes.
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Workarounds or temporary fixes:</span> Implement them if patching is delayed.
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Configuration changes:</span> Modify settings to tighten security.
                </p>
              </div>
            </div>

            {/* Reporting and Monitoring */}
            <div className="bg-white border border-[#E6E6E6] p-8">
              <div className="mb-16">
                <svg className="w-16 h-16" viewBox="0 0 61 61" fill="none">
                  <path d="M59.0949 58.88H2.84492C2.4718 58.88 2.16992 58.5782 2.16992 58.205V1.95503C2.16992 1.5819 2.4718 1.28003 2.84492 1.28003H59.0949C59.468 1.28003 59.7699 1.5819 59.7699 1.95503V58.205C59.7699 58.5782 59.468 58.88 59.0949 58.88ZM3.51992 57.53H58.4199V23.255H3.51992V57.53ZM26.0199 21.905H58.4199V2.63003H26.0199V21.905ZM3.51992 21.905H24.6699V2.63003H3.51992V21.905ZM17.8449 51.38C12.3024 51.38 7.79492 46.8707 7.79492 41.33H9.14492C9.14492 46.1282 13.0487 50.03 17.8449 50.03C22.6412 50.03 26.5449 46.1282 26.5449 41.33C26.5449 36.5319 22.643 32.63 17.8449 32.63V31.28C23.3874 31.28 27.8949 35.7894 27.8949 41.33C27.8949 46.8707 23.3874 51.38 17.8449 51.38ZM52.2699 50.705H50.9199V30.08H52.2718L52.2699 50.705ZM44.7699 50.705H43.4199V35.705H44.7718L44.7699 50.705ZM37.2699 50.705H35.9199V45.08H37.2718L37.2699 50.705Z" fill="black"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black uppercase mb-8">Reporting and Monitoring</h3>
              <div className="space-y-4">
                <p className="text-base text-black leading-8">
                  VMaaS generates reports that track your progress:
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Vulnerability trends:</span> See how your overall vulnerability landscape evolves.
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Remediation progress:</span> Check the progress of fixing identified vulnerabilities.
                </p>
                <p className="text-base text-black leading-8">
                  <span className="font-bold">Compliance reports:</span> Ensure you meet industry regulations and standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Meet Our Team
            </p>
            <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
              The right mixture of leaders, hackers & influencers.
            </h2>
            <h3 className="text-5xl lg:text-6xl font-normal text-black">Management</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Team Member 1 */}
            <div className="bg-white border border-[#EEE]">
              <div className="bg-[#F7F3F2] h-[230px] flex items-center justify-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c7e54cdf0a3c68942346553a28bf1c197440b5bf?width=320" 
                  alt="Venu Rao" 
                  className="w-40 h-40 rounded-sm"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-normal text-black mb-4">Venu Rao</h4>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Co-Founder & CEO</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.2064 0.190126H1.7933C1.32818 0.18733 0.880457 0.366765 0.546005 0.690006C0.211553 1.01325 0.0169632 1.4546 0.00390625 1.91954V22.3826C0.0144042 22.8484 0.208193 23.2913 0.543208 23.615C0.878222 23.9388 1.32742 24.1174 1.7933 24.112H22.2064C22.6723 24.1174 23.1215 23.9388 23.4565 23.615C23.7915 23.2913 23.9853 22.8484 23.9958 22.3826V1.91954C23.9827 1.4546 23.7881 1.01325 23.4537 0.690006C23.1192 0.366765 22.6715 0.18733 22.2064 0.190126ZM7.1115 20.5932H3.59269V9.18708H7.1115V20.5932ZM5.39208 7.59762C4.85182 7.59778 4.33292 7.38664 3.94626 7.00931C3.55959 6.63199 3.33583 6.11841 3.32278 5.5783C3.313 5.30392 3.35983 5.03047 3.46036 4.77499C3.56089 4.5195 3.71296 4.28746 3.9071 4.09332C4.10124 3.89918 4.33328 3.74711 4.58877 3.64658C4.84425 3.54605 5.1177 3.49922 5.39208 3.509C5.91475 3.5454 6.40415 3.7787 6.76152 4.16182C7.1189 4.54495 7.31764 5.04937 7.31764 5.5733C7.31764 6.09723 7.1189 6.60166 6.76152 6.98479C6.40415 7.36791 5.91475 7.60121 5.39208 7.6376V7.59762ZM20.477 20.5232H16.9982V14.9451C16.9982 13.6156 16.9982 11.8862 15.1388 11.8862C13.2794 11.8862 12.9995 13.3457 12.9995 14.8152V20.4633H9.44071V9.18708H12.7596V10.6866H12.8296C13.1697 10.0958 13.6658 9.6099 14.2634 9.28198C14.8611 8.95406 15.5374 8.79674 16.2184 8.8272C19.8072 8.8272 20.477 11.2264 20.477 14.2754V20.5232Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 25 20">
                      <path d="M8.32948 19.9101C10.1719 19.9217 11.9984 19.5673 13.7028 18.8675C15.4073 18.1678 16.9558 17.1366 18.2587 15.8337C19.5615 14.5309 20.5927 12.9823 21.2925 11.2779C21.9922 9.57344 22.3466 7.74702 22.335 5.90456V5.26062C23.2903 4.56084 24.1171 3.70088 24.7788 2.71889C23.8796 3.11234 22.9281 3.37336 21.9541 3.49381C22.9866 2.87824 23.7613 1.90963 24.1349 0.767086C23.1722 1.34457 22.1167 1.75055 21.0152 1.96696C20.2733 1.17655 19.2916 0.652651 18.2221 0.476336C17.1525 0.300021 16.0546 0.481116 15.0983 0.9916C14.142 1.50208 13.3805 2.3135 12.9318 3.3003C12.4831 4.2871 12.3721 5.39427 12.616 6.4505C10.6592 6.35427 8.74455 5.84697 6.99679 4.96163C5.24903 4.07629 3.70733 2.83277 2.47208 1.31203C1.84926 2.39313 1.66048 3.67048 1.94395 4.88552C2.22743 6.10056 2.96199 7.1625 3.99892 7.85636C3.23386 7.82717 2.48642 7.61822 1.81714 7.24642V7.30142C1.81029 8.43141 2.19093 9.52961 2.89562 10.413C3.60031 11.2963 4.58648 11.9115 5.68975 12.1559C4.97807 12.3472 4.23262 12.377 3.50797 12.2429C3.82732 13.2065 4.43696 14.0477 5.25328 14.6512C6.06959 15.2547 7.0526 15.5908 8.0675 15.6136C6.33229 17.0104 4.17566 17.7793 1.94813 17.7953C1.55765 17.7838 1.1681 17.7507 0.78125 17.6963C3.03584 19.1329 5.65617 19.8903 8.32948 19.8781"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white border border-[#EEE]">
              <div className="bg-[#F7F3F2] h-[230px] flex items-center justify-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/958df53a12c2a91bf85836c248202bb769279c7e?width=320" 
                  alt="Srini Dhara" 
                  className="w-40 h-40 rounded-sm"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-normal text-black mb-4">Srini Dhara</h4>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Co-Founder & CEO</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.2064 0.190126H1.7933C1.32818 0.18733 0.880457 0.366765 0.546005 0.690006C0.211553 1.01325 0.0169632 1.4546 0.00390625 1.91954V22.3826C0.0144042 22.8484 0.208193 23.2913 0.543208 23.615C0.878222 23.9388 1.32742 24.1174 1.7933 24.112H22.2064C22.6723 24.1174 23.1215 23.9388 23.4565 23.615C23.7915 23.2913 23.9853 22.8484 23.9958 22.3826V1.91954C23.9827 1.4546 23.7881 1.01325 23.4537 0.690006C23.1192 0.366765 22.6715 0.18733 22.2064 0.190126ZM7.1115 20.5932H3.59269V9.18708H7.1115V20.5932ZM5.39208 7.59762C4.85182 7.59778 4.33292 7.38664 3.94626 7.00931C3.55959 6.63199 3.33583 6.11841 3.32278 5.5783C3.313 5.30392 3.35983 5.03047 3.46036 4.77499C3.56089 4.5195 3.71296 4.28746 3.9071 4.09332C4.10124 3.89918 4.33328 3.74711 4.58877 3.64658C4.84425 3.54605 5.1177 3.49922 5.39208 3.509C5.91475 3.5454 6.40415 3.7787 6.76152 4.16182C7.1189 4.54495 7.31764 5.04937 7.31764 5.5733C7.31764 6.09723 7.1189 6.60166 6.76152 6.98479C6.40415 7.36791 5.91475 7.60121 5.39208 7.6376V7.59762ZM20.477 20.5232H16.9982V14.9451C16.9982 13.6156 16.9982 11.8862 15.1388 11.8862C13.2794 11.8862 12.9995 13.3457 12.9995 14.8152V20.4633H9.44071V9.18708H12.7596V10.6866H12.8296C13.1697 10.0958 13.6658 9.6099 14.2634 9.28198C14.8611 8.95406 15.5374 8.79674 16.2184 8.8272C19.8072 8.8272 20.477 11.2264 20.477 14.2754V20.5232Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 25 20">
                      <path d="M8.32948 19.9101C10.1719 19.9217 11.9984 19.5673 13.7028 18.8675C15.4073 18.1678 16.9558 17.1366 18.2587 15.8337C19.5615 14.5309 20.5927 12.9823 21.2925 11.2779C21.9922 9.57344 22.3466 7.74702 22.335 5.90456V5.26062C23.2903 4.56084 24.1171 3.70088 24.7788 2.71889C23.8796 3.11234 22.9281 3.37336 21.9541 3.49381C22.9866 2.87824 23.7613 1.90963 24.1349 0.767086C23.1722 1.34457 22.1167 1.75055 21.0152 1.96696C20.2733 1.17655 19.2916 0.652651 18.2221 0.476336C17.1525 0.300021 16.0546 0.481116 15.0983 0.9916C14.142 1.50208 13.3805 2.3135 12.9318 3.3003C12.4831 4.2871 12.3721 5.39427 12.616 6.4505C10.6592 6.35427 8.74455 5.84697 6.99679 4.96163C5.24903 4.07629 3.70733 2.83277 2.47208 1.31203C1.84926 2.39313 1.66048 3.67048 1.94395 4.88552C2.22743 6.10056 2.96199 7.1625 3.99892 7.85636C3.23386 7.82717 2.48642 7.61822 1.81714 7.24642V7.30142C1.81029 8.43141 2.19093 9.52961 2.89562 10.413C3.60031 11.2963 4.58648 11.9115 5.68975 12.1559C4.97807 12.3472 4.23262 12.377 3.50797 12.2429C3.82732 13.2065 4.43696 14.0477 5.25328 14.6512C6.06959 15.2547 7.0526 15.5908 8.0675 15.6136C6.33229 17.0104 4.17566 17.7793 1.94813 17.7953C1.55765 17.7838 1.1681 17.7507 0.78125 17.6963C3.03584 19.1329 5.65617 19.8903 8.32948 19.8781"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white border border-[#EEE]">
              <div className="bg-[#F7F3F2] h-[230px] flex items-center justify-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8bc16535aafd602382698522660fdbfb6d3abd25?width=320" 
                  alt="Akhil Reni" 
                  className="w-40 h-40 rounded-sm"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-normal text-black mb-4">Akhil Reni</h4>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Co-Founder & CEO</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.2064 0.190126H1.7933C1.32818 0.18733 0.880457 0.366765 0.546005 0.690006C0.211553 1.01325 0.0169632 1.4546 0.00390625 1.91954V22.3826C0.0144042 22.8484 0.208193 23.2913 0.543208 23.615C0.878222 23.9388 1.32742 24.1174 1.7933 24.112H22.2064C22.6723 24.1174 23.1215 23.9388 23.4565 23.615C23.7915 23.2913 23.9853 22.8484 23.9958 22.3826V1.91954C23.9827 1.4546 23.7881 1.01325 23.4537 0.690006C23.1192 0.366765 22.6715 0.18733 22.2064 0.190126ZM7.1115 20.5932H3.59269V9.18708H7.1115V20.5932ZM5.39208 7.59762C4.85182 7.59778 4.33292 7.38664 3.94626 7.00931C3.55959 6.63199 3.33583 6.11841 3.32278 5.5783C3.313 5.30392 3.35983 5.03047 3.46036 4.77499C3.56089 4.5195 3.71296 4.28746 3.9071 4.09332C4.10124 3.89918 4.33328 3.74711 4.58877 3.64658C4.84425 3.54605 5.1177 3.49922 5.39208 3.509C5.91475 3.5454 6.40415 3.7787 6.76152 4.16182C7.1189 4.54495 7.31764 5.04937 7.31764 5.5733C7.31764 6.09723 7.1189 6.60166 6.76152 6.98479C6.40415 7.36791 5.91475 7.60121 5.39208 7.6376V7.59762ZM20.477 20.5232H16.9982V14.9451C16.9982 13.6156 16.9982 11.8862 15.1388 11.8862C13.2794 11.8862 12.9995 13.3457 12.9995 14.8152V20.4633H9.44071V9.18708H12.7596V10.6866H12.8296C13.1697 10.0958 13.6658 9.6099 14.2634 9.28198C14.8611 8.95406 15.5374 8.79674 16.2184 8.8272C19.8072 8.8272 20.477 11.2264 20.477 14.2754V20.5232Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 25 20">
                      <path d="M8.32948 19.9101C10.1719 19.9217 11.9984 19.5673 13.7028 18.8675C15.4073 18.1678 16.9558 17.1366 18.2587 15.8337C19.5615 14.5309 20.5927 12.9823 21.2925 11.2779C21.9922 9.57344 22.3466 7.74702 22.335 5.90456V5.26062C23.2903 4.56084 24.1171 3.70088 24.7788 2.71889C23.8796 3.11234 22.9281 3.37336 21.9541 3.49381C22.9866 2.87824 23.7613 1.90963 24.1349 0.767086C23.1722 1.34457 22.1167 1.75055 21.0152 1.96696C20.2733 1.17655 19.2916 0.652651 18.2221 0.476336C17.1525 0.300021 16.0546 0.481116 15.0983 0.9916C14.142 1.50208 13.3805 2.3135 12.9318 3.3003C12.4831 4.2871 12.3721 5.39427 12.616 6.4505C10.6592 6.35427 8.74455 5.84697 6.99679 4.96163C5.24903 4.07629 3.70733 2.83277 2.47208 1.31203C1.84926 2.39313 1.66048 3.67048 1.94395 4.88552C2.22743 6.10056 2.96199 7.1625 3.99892 7.85636C3.23386 7.82717 2.48642 7.61822 1.81714 7.24642V7.30142C1.81029 8.43141 2.19093 9.52961 2.89562 10.413C3.60031 11.2963 4.58648 11.9115 5.68975 12.1559C4.97807 12.3472 4.23262 12.377 3.50797 12.2429C3.82732 13.2065 4.43696 14.0477 5.25328 14.6512C6.06959 15.2547 7.0526 15.5908 8.0675 15.6136C6.33229 17.0104 4.17566 17.7793 1.94813 17.7953C1.55765 17.7838 1.1681 17.7507 0.78125 17.6963C3.03584 19.1329 5.65617 19.8903 8.32948 19.8781"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 4 */}
            <div className="bg-white border border-[#EEE]">
              <div className="bg-[#F7F3F2] h-[230px] flex items-center justify-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e75622e574b2cfe87fda9c9e53e66e700d5e3f3a?width=320" 
                  alt="Anurag Giri" 
                  className="w-40 h-40 rounded-sm"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-normal text-black mb-4">Anurag Giri</h4>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Director of Services</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.2064 0.190126H1.7933C1.32818 0.18733 0.880457 0.366765 0.546005 0.690006C0.211553 1.01325 0.0169632 1.4546 0.00390625 1.91954V22.3826C0.0144042 22.8484 0.208193 23.2913 0.543208 23.615C0.878222 23.9388 1.32742 24.1174 1.7933 24.112H22.2064C22.6723 24.1174 23.1215 23.9388 23.4565 23.615C23.7915 23.2913 23.9853 22.8484 23.9958 22.3826V1.91954C23.9827 1.4546 23.7881 1.01325 23.4537 0.690006C23.1192 0.366765 22.6715 0.18733 22.2064 0.190126ZM7.1115 20.5932H3.59269V9.18708H7.1115V20.5932ZM5.39208 7.59762C4.85182 7.59778 4.33292 7.38664 3.94626 7.00931C3.55959 6.63199 3.33583 6.11841 3.32278 5.5783C3.313 5.30392 3.35983 5.03047 3.46036 4.77499C3.56089 4.5195 3.71296 4.28746 3.9071 4.09332C4.10124 3.89918 4.33328 3.74711 4.58877 3.64658C4.84425 3.54605 5.1177 3.49922 5.39208 3.509C5.91475 3.5454 6.40415 3.7787 6.76152 4.16182C7.1189 4.54495 7.31764 5.04937 7.31764 5.5733C7.31764 6.09723 7.1189 6.60166 6.76152 6.98479C6.40415 7.36791 5.91475 7.60121 5.39208 7.6376V7.59762ZM20.477 20.5232H16.9982V14.9451C16.9982 13.6156 16.9982 11.8862 15.1388 11.8862C13.2794 11.8862 12.9995 13.3457 12.9995 14.8152V20.4633H9.44071V9.18708H12.7596V10.6866H12.8296C13.1697 10.0958 13.6658 9.6099 14.2634 9.28198C14.8611 8.95406 15.5374 8.79674 16.2184 8.8272C19.8072 8.8272 20.477 11.2264 20.477 14.2754V20.5232Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 25 20">
                      <path d="M8.32948 19.9101C10.1719 19.9217 11.9984 19.5673 13.7028 18.8675C15.4073 18.1678 16.9558 17.1366 18.2587 15.8337C19.5615 14.5309 20.5927 12.9823 21.2925 11.2779C21.9922 9.57344 22.3466 7.74702 22.335 5.90456V5.26062C23.2903 4.56084 24.1171 3.70088 24.7788 2.71889C23.8796 3.11234 22.9281 3.37336 21.9541 3.49381C22.9866 2.87824 23.7613 1.90963 24.1349 0.767086C23.1722 1.34457 22.1167 1.75055 21.0152 1.96696C20.2733 1.17655 19.2916 0.652651 18.2221 0.476336C17.1525 0.300021 16.0546 0.481116 15.0983 0.9916C14.142 1.50208 13.3805 2.3135 12.9318 3.3003C12.4831 4.2871 12.3721 5.39427 12.616 6.4505C10.6592 6.35427 8.74455 5.84697 6.99679 4.96163C5.24903 4.07629 3.70733 2.83277 2.47208 1.31203C1.84926 2.39313 1.66048 3.67048 1.94395 4.88552C2.22743 6.10056 2.96199 7.1625 3.99892 7.85636C3.23386 7.82717 2.48642 7.61822 1.81714 7.24642V7.30142C1.81029 8.43141 2.19093 9.52961 2.89562 10.413C3.60031 11.2963 4.58648 11.9115 5.68975 12.1559C4.97807 12.3472 4.23262 12.377 3.50797 12.2429C3.82732 13.2065 4.43696 14.0477 5.25328 14.6512C6.06959 15.2547 7.0526 15.5908 8.0675 15.6136C6.33229 17.0104 4.17566 17.7793 1.94813 17.7953C1.55765 17.7838 1.1681 17.7507 0.78125 17.6963C3.03584 19.1329 5.65617 19.8903 8.32948 19.8781"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white border border-[#EEE]">
              <div className="bg-[#F7F3F2] h-[230px] flex items-center justify-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/417397ce7b6b5e95563a16bb43f0e1cbf3ffccf5?width=320" 
                  alt="Eshwar Uppala" 
                  className="w-40 h-40 rounded-sm"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-normal text-black mb-4">Eshwar Uppala</h4>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">Director of Product</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.2064 0.190126H1.7933C1.32818 0.18733 0.880457 0.366765 0.546005 0.690006C0.211553 1.01325 0.0169632 1.4546 0.00390625 1.91954V22.3826C0.0144042 22.8484 0.208193 23.2913 0.543208 23.615C0.878222 23.9388 1.32742 24.1174 1.7933 24.112H22.2064C22.6723 24.1174 23.1215 23.9388 23.4565 23.615C23.7915 23.2913 23.9853 22.8484 23.9958 22.3826V1.91954C23.9827 1.4546 23.7881 1.01325 23.4537 0.690006C23.1192 0.366765 22.6715 0.18733 22.2064 0.190126ZM7.1115 20.5932H3.59269V9.18708H7.1115V20.5932ZM5.39208 7.59762C4.85182 7.59778 4.33292 7.38664 3.94626 7.00931C3.55959 6.63199 3.33583 6.11841 3.32278 5.5783C3.313 5.30392 3.35983 5.03047 3.46036 4.77499C3.56089 4.5195 3.71296 4.28746 3.9071 4.09332C4.10124 3.89918 4.33328 3.74711 4.58877 3.64658C4.84425 3.54605 5.1177 3.49922 5.39208 3.509C5.91475 3.5454 6.40415 3.7787 6.76152 4.16182C7.1189 4.54495 7.31764 5.04937 7.31764 5.5733C7.31764 6.09723 7.1189 6.60166 6.76152 6.98479C6.40415 7.36791 5.91475 7.60121 5.39208 7.6376V7.59762ZM20.477 20.5232H16.9982V14.9451C16.9982 13.6156 16.9982 11.8862 15.1388 11.8862C13.2794 11.8862 12.9995 13.3457 12.9995 14.8152V20.4633H9.44071V9.18708H12.7596V10.6866H12.8296C13.1697 10.0958 13.6658 9.6099 14.2634 9.28198C14.8611 8.95406 15.5374 8.79674 16.2184 8.8272C19.8072 8.8272 20.477 11.2264 20.477 14.2754V20.5232Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-black hover:text-gray-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 25 20">
                      <path d="M8.32948 19.9101C10.1719 19.9217 11.9984 19.5673 13.7028 18.8675C15.4073 18.1678 16.9558 17.1366 18.2587 15.8337C19.5615 14.5309 20.5927 12.9823 21.2925 11.2779C21.9922 9.57344 22.3466 7.74702 22.335 5.90456V5.26062C23.2903 4.56084 24.1171 3.70088 24.7788 2.71889C23.8796 3.11234 22.9281 3.37336 21.9541 3.49381C22.9866 2.87824 23.7613 1.90963 24.1349 0.767086C23.1722 1.34457 22.1167 1.75055 21.0152 1.96696C20.2733 1.17655 19.2916 0.652651 18.2221 0.476336C17.1525 0.300021 16.0546 0.481116 15.0983 0.9916C14.142 1.50208 13.3805 2.3135 12.9318 3.3003C12.4831 4.2871 12.3721 5.39427 12.616 6.4505C10.6592 6.35427 8.74455 5.84697 6.99679 4.96163C5.24903 4.07629 3.70733 2.83277 2.47208 1.31203C1.84926 2.39313 1.66048 3.67048 1.94395 4.88552C2.22743 6.10056 2.96199 7.1625 3.99892 7.85636C3.23386 7.82717 2.48642 7.61822 1.81714 7.24642V7.30142C1.81029 8.43141 2.19093 9.52961 2.89562 10.413C3.60031 11.2963 4.58648 11.9115 5.68975 12.1559C4.97807 12.3472 4.23262 12.377 3.50797 12.2429C3.82732 13.2065 4.43696 14.0477 5.25328 14.6512C6.06959 15.2547 7.0526 15.5908 8.0675 15.6136C6.33229 17.0104 4.17566 17.7793 1.94813 17.7953C1.55765 17.7838 1.1681 17.7507 0.78125 17.6963C3.03584 19.1329 5.65617 19.8903 8.32948 19.8781"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section - Repeat */}
      <section className="bg-[#F6F6F6] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
                Go custom or go streamlined!
              </h2>
              <p className="text-2xl lg:text-3xl text-black leading-relaxed">
                If you have your own vulnerability management tools, we can connect them to our platform for risk-based analysis. Alternatively, we can build a custom risk-based vulnerability management solution using our native platform.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-4 bg-[#FFE034] border-2 border-[#FFE034] text-[#00539A] text-sm font-bold rounded-full hover:bg-yellow-300 transition-colors"
              >
                Contact Now
              </Link>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c29624f8d9efe30cf8fc9e3a0493ccaa4372c0d0?width=1258" 
                alt="Integrations" 
                className="w-full max-w-[629px] h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-xl text-[#0F62FE] font-normal mb-12">
            Trust our elite team of cybersecurity experts to enhance your security
          </h3>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/589fd937214839fb529892222d3afb5376cca44f?width=2000" 
            alt="Certificates" 
            className="w-full max-w-[1000px] h-auto mx-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
