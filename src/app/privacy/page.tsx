/* eslint-disable react/no-unescaped-entities */
import { ContactsFormClient } from '@/features/contactsForm/contactsFormClient';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Поддержка - Берсерк ассистент',
  description: 'Поддержка пользоветелей приложения "Берсерк Ассистент"',
};

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto mt-28 p-6 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 ">
      <h1 className="text-4xl font-bold mb-8 text-mainDark">Privacy Policy</h1>
      
      <div className="text-sm text-grayLight mb-8">
        Last updated: Apr 18, 2025
      </div>

      <div className="space-y-8">
        <section className="prose prose-gray max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          
          <p className="text-lg leading-relaxed mb-12 mt-12">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Interpretation and Definitions</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-mainDark">Interpretation</h3>
            <p className="text-base leading-relaxed text-grayDark">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">Definitions</h3>
            <p className="text-base mb-4 text-grayDark">For the purposes of this Privacy Policy:</p>
            
            <ul className="space-y-4 text-grayDark">
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Account</span> means a unique account created for You to access our Service or parts of our Service.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Application</span> refers to Берсерк Ассистент (Berserk Assistant), the software program provided by the Company.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Берсерк Ассистент (Berserk Assistant).
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Country</span> refers to: Russia
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Personal Data</span> is any information that relates to an identified or identifiable individual.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Service</span> refers to the Application.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Service Provider</span> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
              </li>
            </ul>
          </div>
        </section>
<section>
  <div>
    <ul>
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Third-party Social Media Service</span> refers to any website or any social network website through which a User can log in or create an account to use the Service.
              </li>

              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">Usage Data</span> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
              </li>

              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Collecting and Using Your Personal Data</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-mainDark">Types of Data Collected</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3 text-mainDark">Personal Data</h4>
                <p className="text-base leading-relaxed text-grayDark">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-mainDark">Usage Data</h4>
                <p className="text-base leading-relaxed text-grayDark">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="text-base leading-relaxed text-grayDark mt-3">
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                <p className="text-base leading-relaxed text-grayDark mt-3">
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </p>
                <p className="text-base leading-relaxed text-grayDark mt-3">
                  We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3 text-mainDark">Information from Third-Party Social Media Services</h4>
                <p className="text-base leading-relaxed text-grayDark">
                  The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1 text-grayDark">
                  <li>Google</li>
                  <li>Facebook</li>
                  <li>Apple</li>
                  <li>LinkedIn</li>
                  <li>Yandex</li>
                  <li>VK.com</li>
                </ul>

                <p className="text-base leading-relaxed text-grayDark mt-4">
                  If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
                </p>
                <p className="text-base leading-relaxed text-grayDark mt-3">
                  You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
          </section>
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-mainDark">Use of Your Personal Data</h3>
            <p className="text-base leading-relaxed text-grayDark mb-4">
              The Company may use Personal Data for the following purposes:
            </p>
            
            <ul className="space-y-4 text-grayDark">
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">To provide and maintain our Service</span>, including to monitor the usage of our Service.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">To manage Your Account</span>: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">For the performance of a contract</span>: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">To contact You</span>: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">To provide You with news</span>: special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">To manage Your requests</span>: To attend and manage Your requests to Us.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">For business transfers</span>: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">For other purposes</span>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-base leading-relaxed text-grayDark mb-4">
              We may share Your personal information in the following situations:
            </p>
            
            <ul className="space-y-4 text-grayDark">
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">With Service Providers</span>: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">For business transfers</span>: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">With Affiliates</span>: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">With business partners</span>: We may share Your information with Our business partners to offer You certain products, services or promotions.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">With other users</span>: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
              </li>
              
              <li className="pl-4 border-l-2 border-mainOrange">
                <span className="font-medium">With Your consent</span>: We may disclose Your personal information for any other purpose with Your consent.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-mainDark">Retention of Your Personal Data</h3>
            <p className="text-base leading-relaxed text-grayDark mb-4">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
            <p className="text-base leading-relaxed text-grayDark">
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
              </p>      

              <section>
      <div className="mb-8">
        <div className="space-y-6">
          {/* Transfer of Your Personal Data */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-mainDark">
              Transfer of Your Personal Data
            </h2>
            <p className="text-base leading-relaxed text-grayDark">
              Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place, including the security of Your data and other personal information.
            </p>
          </div>

          {/* Delete Your Personal Data */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-mainDark">
              Delete Your Personal Data
            </h2>
            <p className="text-base leading-relaxed text-grayDark">
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              Our Service may give You the ability to delete certain information about You from within the Service.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
            </p>
          </div>

          {/* Disclosure of Your Personal Data */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-mainDark">
              Disclosure of Your Personal Data
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-mainDark">
          Privacy Policy
        </h2>

        <div className="space-y-6">
          {/* Business Transactions */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">
              Business Transactions
            </h3>
            <p className="text-base leading-relaxed text-grayDark">
              If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. 
              We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
            </p>
          </div>

          {/* Law Enforcement */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">
              Law Enforcement
            </h3>
            <p className="text-base leading-relaxed text-grayDark">
              Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do 
              so by law or in response to valid requests by public 
              authorities (e.g. a court or a government agency).
            </p>
          </div>

          {/* Other Legal Requirements */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">
              Other Legal Requirements
            </h3>
            <p className="text-base leading-relaxed text-grayDark">
              The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc pl-8 mt-2 space-y-1 text-grayDark">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of Users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
          </div>

          {/* Security of Your Personal Data */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">
              Security of Your Personal Data
            </h3>
            <p className="text-base leading-relaxed text-grayDark">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over 
              the Internet, or method of electronic storage is 100% secure. While We strive to use commercially 
              acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">
              Children's Privacy
            </h3>
            <p className="text-base leading-relaxed text-grayDark">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally 
              identifiable information from anyone under the age of 13. If You are a parent or guardian and You 
              are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware 
              that We have collected Personal Data from anyone under the age of 13 without verification of parental 
              consent, We take steps to remove that information from Our servers.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              If We need to rely on consent as a legal basis for processing Your information and Your country requires 
              consent from a parent, We may require Your parent's consent before We collect and use that information.
            </p>
          </div>

          {/* Links to Other Websites */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">
              Links to Other Websites
            </h3>
            <p className="text-base leading-relaxed text-grayDark">
              Our Service may contain links to other websites that are not operated by Us. If You click on a third-party 
              link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy 
              of every site You visit.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any 
              third-party sites or services.
            </p>
          </div>

          {/* Changes to this Privacy Policy */}
          <div>
            <h3 className="text-xl font-medium mb-4 text-mainDark">
              Changes to this Privacy Policy
            </h3>
            <p className="text-base leading-relaxed text-grayDark">
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new 
              Privacy Policy on this page.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming 
              effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-base leading-relaxed text-grayDark mt-3">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>
          </div>

         
        </div>
      </div>
    </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Usage Data Collection</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed mb-4 text-grayDark">
              Usage Data is collected automatically when using the Service. Usage Data may include information such as:
            </p>
            <ul className="space-y-3 text-grayDark list-disc pl-6">
              <li>Your Device's Internet Protocol address (IP address)</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Access timestamps and dates</li>
              <li>Device identifiers and diagnostic data</li>
            </ul>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Third-Party Social Media Services</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed mb-4 text-grayDark">
              We allow you to create an account and log in through the following Third-party Social Media Services:
            </p>
            <ul className="space-y-3 text-grayDark list-disc pl-6">
              <li>Google</li>
              <li>Facebook</li>
              <li>Apple</li>
              <li>LinkedIn</li>
              <li>Yandex</li>
              <li>VK.com</li>
            </ul>
            <p className="text-base leading-relaxed mt-4 text-grayDark">
              If You decide to register through a Third-Party Social Media Service, We may collect Personal data associated with Your account such as Your name, email address, and activities.
            </p>
          </div>
        </section>

        <section className="space-y-8  mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Data Protection and Security</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed mb-4 text-grayDark">
              The security of Your Personal Data is important to Us. While We implement commercially acceptable measures to protect Your Personal Data, we cannot guarantee its absolute security due to the inherent risks of Internet transmission and electronic storage.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <h3 className="text-lg font-medium mb-3 text-mainDark">Our Security Measures Include:</h3>
              <ul className="space-y-2 text-grayDark list-disc pl-6">
                <li>Encryption of data in transit</li>
                <li>Regular security assessments</li>
                <li>Access control and authentication</li>
                <li>Continuous monitoring and updates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-8 mb-12 mt-12 mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Data Retention</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed text-grayDark">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
            </p>
          </div>
        </section>

        <section className="space-y-8 mb-12 mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Your Rights</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed text-grayDark">
              You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing activities.
            </p>
          </div>
        </section>

        <section className="space-y-8 mb-12 mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-mainDark">Contact Us</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed text-grayDark">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <p className="text-base text-grayDark">
                By visiting our contact page: <a href="https://berserk-app.ru/contact" className="text-mainOrange hover:text-mainRose transition-colors">https://berserk-app.ru/contact</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
    
  );
};

export default Privacy;
