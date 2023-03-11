import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faLinkedinIn,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'
import white from '../assets/white.png'
import playlogo from '../assets/old-play-store.svg'
import applogo from '../assets/old-app-store.svg'

const Footer = () => {
  return (
    
    <div className='body footer'>
        <div className='bottom'>
        <div className='footer-main'>
               <div className='footer-main'>
                  <div className='main-left'>
                        <img className='logo' src={white} alt="logo"/>
                        <div className='left-buttons'>
                          <img src={playlogo} alt='play-button'></img>
                          <img src={applogo} alt='apple-button'></img>
                        </div>
                        <div className='footer-brands'>
                            <FontAwesomeIcon icon={faFacebook}/>
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faYoutube}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                      </div>
                  </div>
                  <div className='list'>
                      <ul>
                        <h1>Explore Products</h1>
                        <li>Mutual Funds</li>
                        <li>INDstocks</li>
                        <li>Us stocks</li>
                        <li>IPO</li>
                        <li>Fixed Deposit</li>
                        <li>Calculators</li>
                      </ul>
                      <ul>
                        <h1>Company</h1>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Legal & Regulatory</li>
                        <li>Site map</li>
                      </ul>
                      <ul>
                        <h1>Contacts</h1>
                        <li>Customer Service</li>
                      </ul>
                      </div>

                 
              </div>    
        </div>
            <div className='footer-top'>
             
                <div className='left'>
                  <div className="footer-bottom"
                  style={{width:'98%'}}>
                    <p>Finzoom Investment Advisors Private Limited - Investment Advisory Unit (Separately Identifiable Unit) : is the holding Company which is registered with Securities Exchange Board of India as an investment advisor under SEBI (Investment Advisors) Regulations, 2013 (“IA regulations”) vide registration no. INA100012190 and is in the services and/or products, related to all kind of financial/ financial technology services, by using technology or otherwise, including but not limited to wealth management, financial technologies, investment advisory services, financial advice, financial analytics, distribution services and financial information.</p>
                    <p>Finzoom Investment Advisors Private Limited - Investment Advisory Unit (Separately Identifiable Unit)

                        [SEBI RIA Registration No: INA100012190] BASL Registration No: 1154 [Type of Registration: Non-Individual] [Validity of registration: December 17, 2018-Perpetual] [Address: 616, 6th Floor, Suncity Success Tower, Golf Course Extension Road, Sector – 65, Gurugram, Haryana- 122005] [Corresponding SEBI local office address: Securities and Exchange Board of India, Local Office, First Floor, SCO 127-128, Sector 17C, Chandigarh-160017][Principal Officer details: Mr. Gaurav Sharma, Email id:principalofficer@indmoney.com]; Compliance Officer: Mr. Sunny Bajaj

                        [ARN - 151913] [Platform Partner : BSE (Member code-24801)] [CIN - U67190HR2018PTC073294] [GST No : 06AADCF3538Q1Z8]</p>
                  <p>Finzoomers Services Private Limited (“Finzoomers”) carries out the business of referrer, intermediary, and facilitation, for varied financial services, including solicitation of insurance policies as a Corporate Agent(Composite). Finzoomers got registered with IRDAI as Corporate Agent (Composite) vide registration no. CA0744 dated March 3, 2021.

                    Finzoomers also carries out various facilitation activities like acting as digital platform for selling fixed deposits, Opening of Savings Bank Account, Digital lending platform, foreign remittance services in respect to US Stocks trading via tie-ups with various Banks/NBFCs and facilitation of US Stocks trading through Stock Broker-Dealer like Drivewealth & Alpaca which are registered with USA Securities Exchange Commission.
                    [Registered address: 624-625, 6th Floor, Suncity Success Tower, Golf Course Extension Road, Sector - 65 Gurugram – HR- 122005] [IRDAI Corporate Agent (Composite) Registration No- CA0744 Validity till - 02/03/2024] [Principal Officer- Mr. Ankur Goyal, Principal Officer email id- po@finzoomers.in] [CIN: U74990HR2020PTC086201] [GST No: 06AAECF0692E1ZV] [Email id: insurancesupport@indmoney.com] [Compliance Officer: Ms. Aayushi Agrawal]</p>

                  <p>INDmoney Private Limited is carrying out the business in respect to stock broking activities and also carries out the activities of depository participant SEBI Registration No. INZ000305337 | SEBI Depository Participant Registration No. IN-DP-690-2022 Depository Participant ID: CDSL 12095500 | Trading and Clearing Member of NSE (90267, M70042) and BSE (6779)| AMFIRegistration No: ARN-254564| Registered Office - 616, 6th Floor Suncity Success Tower, Sector 65, Gurugram, Haryana-122005 | CIN U67100HR2021PTC098653 |Compliance officer: Ameya M. Bhelekar</p>
                   
                   <section className='trans'>
                      <p>INDmoney makes no warranties or representations, express or implied, on products and services offered through the platform. It accepts no liability for any damages or losses, however, caused in connection with the use of, or on the reliance of its advisory or related services.</p>
                      <p>Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, goal, time frame, risk and reward balance and the cost associated with the investment before choosing a fund, or designing a portfolio that suits your needs. Performance and returns of any investment portfolio can neither be predicted nor guaranteed.</p>
                      <p>Investment in securities market are subject to market risks, read all the related documents carefully before investing.</p>
                      <p>Brokerage will not exceed the SEBI prescribed limit</p>
                      <p>Marketing and distribution of various financial products such as loans, deposits and Insurance are powered by Finzoomers Services Private Limited.</p>
                   </section>
                  
                   <p>[Digital Banking Partner : SBM Bank] [Terms and Conditions] [Toll Free Number- 1800 1033 817] [Customer Care- customercare@sbmbank.co.in]</p>
                </div>
                </div>
                <div className='right'>
                  

                      <section className='right-bottom'>
                          <p>Stocks: All Stocks|Top Gainers|Top Losers|Hot Stocks|Most Active|At 52 Week High|At 52 Week Low|Bajaj Finance Share Price |Vedanta Share Price|HDFC Share Price|Wipro Share Price|Adani Wilmar Share Price|Infosys Share Price|Yes Bank Share Price|Tata Steel Share Price|ITC Share Price|Zomato Share Price|Tata Motors Share Price|HDFC Bank Share Price</p>
                          <p>Stocks Dividend: Vedanta dividend|Tata steel dividend|Hindustan zinc dividend|IOC dividend|ITC dividend|BPCL dividend|Tata power dividend|Coal india dividend|Sail dividend|TCS dividend|NMDC dividend</p>
                          <p>Mutual Funds: Index Funds|Large Cap Funds|Mid Cap Funds|Global Funds|Multi Cap Funds|Small Cap Funds|Liquid Funds|Ultra Short Funds|Arbitrage Funds|Equity Savings Funds|Balanced Funds|Multi Asset Funds|All Mutual Funds|Equity Funds|Debt funds|Hybrid Funds|Tax Saving Funds|High Return Mutual funds|Mutual funds|SIP Mutual Funds</p>
                          <p>Mutual Funds Guide: NAV|XIRR|Dividend Yield Fund|Hedge Funds|Regular vs Direct Mutual Funds|SIP|AUM|Equity vs Debt Funds|Systematic Withdrawal Plan|Contra Funds|IDCW|Gilt Funds|Expense Ratio|Fund of Funds|Exit Load|Asset Allocation Fund</p>
                          <p>Popular Mutual Funds: Parag Parikh Flexi Cap Fund|HDFC Balanced Advantage Fund|Tata Digital India Fund|Axis Bluechip Fund|SBI Small Cap Fund</p>
                          <p>US Stocks: All US Stocks|US Exchange Traded Funds|US Tech Stocks|High Demand US stocks|US Top Gainers|Top Losers|Top Finance US stocks|Top Energy US stocks|Top Pharma US stocks|FAANG</p>
                          <p>US Stocks Guide: Invest in Tesla from India|Invest in Apple from India |Invest in Amazon from India|Liberalised Remittance Scheme (LRS)|US Stock Market Timings|US Stock Market Holidays</p>
                          <p>Insurance: Insurance|Term insurance|Health Insurance|Super Top Up Insurance</p>
                          <p>IPO Center: IPO|Upcoming IPO</p>
                          <p>Tools: All Calculators|Compare Mutual Funds|FD Calculator|EMI Calculator|SIP Calculator|Lumpsum Calculator|Gratuity Calculator|Post Office FD Calculator|Interest Calculator|Post Office RD Calculator|Post Office PPF Calculator|GST Calculator|SWP Calculator|CAGR Calculator|NSC Calculator|Income Tax Calculator</p>
                          <p>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</p>
                          <p>INDmoney, INDwealth, IND.app, IND.money, INDsave.com are brand and product of Finzoom Investment Advisors (P) Limited.</p>
                      </section>
                      
                </div>
                
            </div>
            
        </div>
       
        
    
    </div>
  )
}

export default Footer