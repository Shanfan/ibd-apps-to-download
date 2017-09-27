/*
add "<p id='stop'></p>" at the point that you want autoscroll to stop at. Will use stopText if necessary 
*/

var isiCSS = "<style>" +
	"div { opacity:1;} " +
	"p {font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#000000; line-height:12px; margin-left:3px; }" +
	".header {  color:#000000; font-size:13px; font-weight:bold;line-height:12px;  }" +
	".subheader {  color:#b60962; font-size:11px; font-weight:bold; }" +
	"sup {  font-size:9px;     line-height: 7px; }" +
	".stop { color:#00AEEF; font-weight:bold; }" +
	"b  { font-weight:bold; }" +
	"a.isi:link, a.isi.visited  {color:#C6296E; text-decoration:underline; font-weight:bold; }" +
	"a.isi:hover  { color:#000000; text-decoration:none; }" +
	"ul {  padding-left: 15px; margin: 0px; }" +
	"#blackbox {border: 1px solid #000000; padding: 3px;}" +
	"</style>";

var stopText = "<p></p><p></p>";

var isiText = "" +
	isiCSS +
"<span class='subheader'>What is the most important information I should know about HUMIRA?</span>" +
"<p></p>You should discuss the potential benefits and risks of HUMIRA with your doctor. HUMIRA is a TNF blocker medicine that can lower the ability of your immune system to fight infections. You should not start taking HUMIRA if you have any kind of infection unless your doctor says it is okay." +
"<p></p>" +
"<ul>" +
"<li><strong>Serious infections have happened in people taking HUMIRA. These serious infections include tuberculosis (TB) and infections caused by viruses, fungi, or bacteria that have spread throughout the body. Some people have died from these infections. </strong> Your doctor should test you for TB before starting HUMIRA, and check you closely for signs and symptoms of TB during treatment with HUMIRA. If your doctor feels you are at risk, you may be treated with medicine for TB.</li>" +
"<li><strong>Cancer.</strong> For children and adults taking TNF blockers, including HUMIRA, the chance of getting lymphoma or other cancers may increase. There have been cases of unusual cancers in children, teenagers, and young adults using TNF blockers. Some people have developed a rare type of cancer called hepatosplenic T-cell lymphoma. This type of cancer often results in death. If using TNF blockers including HUMIRA, your chance of getting two types of skin cancer (basal cell and squamous cell) may increase. These types are generally not life-threatening if treated; tell your doctor if you have a bump or open sore that doesn't heal.</li>" +
"</ul>" +

"<p></p><span class='stop'>Scroll down for more Important Safety Information.</span>" +

"<p id='stop'></p><p></p>" +

"<p></p><p></p><span class='subheader'>What should I tell my doctor BEFORE starting HUMIRA?</span>" +
"<p></p><p></p><strong>Tell your doctor about all of your health conditions,</strong> including if you:" +
"<p></p>" +
"<ul>" +
"<li>Have an infection, are being treated for infection, or have symptoms of an infection</li>" +
"<li>Get a lot of infections or infections that keep coming back</li>" +
"<li>Have diabetes</li>" +
"<li>Have TB or have been in close contact with someone with TB, or were born in, lived in, or traveled where there is more risk for getting TB</li>" +
"<li>Live or have lived in an area (such as the Ohio and Mississippi River valleys) where there is an increased risk for getting certain kinds of fungal infections, such as histoplasmosis, coccidioidomycosis, or blastomycosis</li>" +
"<li>Have or have had hepatitis B</li>" +
"<li>Are scheduled for major surgery</li>" +
"<li>Have or have had cancer</li>" +
"<li>Have numbness or tingling or a nervous system disease such as multiple sclerosis or Guillain-Barr&#233; syndrome</li>" +
"<li>Have or had heart failure</li>" +
"<li>Have recently received or are scheduled to receive a vaccine. HUMIRA patients may receive vaccines, except for live vaccines</li>" +
"<li>Are allergic to rubber, latex, or any HUMIRA ingredients</li>" +
"<li>Are pregnant, planning to become pregnant, breastfeeding, or planning to breastfeed</li>" +
"<li>Have a baby and you were using HUMIRA during your pregnancy. Tell your baby's doctor before your baby receives any vaccines</li>"+
"</ul>" +


"<p></p><p></p><strong>Also tell your doctor about all the medicines you take.</strong> You should not take HUMIRA with ORENCIA<sup>&#174;</sup> (abatacept), KINERET<sup>&#174;</sup> (anakinra), REMICADE<sup>&#174;</sup> (infliximab), ENBREL<sup>&#174;</sup> (etanercept), CIMZIA<sup>&#174;</sup> (certolizumab pegol), or SIMPONI<sup>&#174;</sup> (golimumab). Tell your doctor if you have ever used RITUXAN<sup>&#174;</sup> (rituximab), IMURAN<sup>&#174;</sup> (azathioprine), or PURINETHOL<sup>&#174;</sup> (mercaptopurine, 6-MP)." +
"<p></p><p></p><span class='subheader'>What should I watch for AFTER starting HUMIRA?</span>" +
"<p></p><p></p><b>HUMIRA can cause serious side effects,</b> including:" +
"<ul>" +
"<li><b>Serious infections.</b> These include TB and infections caused by viruses, fungi, or bacteria. Symptoms related to TB include a cough, low-grade fever, weight loss, or loss of body fat and muscle.</li>" +
"<li><b>Hepatitis B infection in carriers of the virus.</b> Symptoms include muscle aches, feeling very tired, dark urine, skin or eyes that look yellow, little or no appetite, vomiting, clay-colored bowel movements, fever, chills, stomach discomfort, and skin rash.</li>" +
"<li><b>Allergic reactions.</b> Symptoms of a serious allergic reaction include hives, trouble breathing, and swelling of your face, eyes, lips, or mouth.</li>" +
"<li><b>Nervous system problems.</b> Signs and symptoms include numbness or tingling, problems with your vision, weakness in your arms or legs, and dizziness.</li>" +
"<li><b>Blood problems.</b> Symptoms include a fever that does not go away, bruising or bleeding very easily, or looking very pale.</li>" +
"<li><b>Heart failure</b> (new or worsening). Symptoms include shortness of breath, swelling of your ankles or feet, and sudden weight gain.</li>" +
"<li><b>Immune reactions including a lupus-like syndrome.</b> Symptoms include chest discomfort or pain that does not go away, shortness of breath, joint pain, or rash on your cheeks or arms that gets worse in the sun.</li>" +
"<li><b>Liver problems.</b> Symptoms include feeling very tired, skin or eyes that look yellow, poor appetite or vomiting, and pain on the right side of your stomach (abdomen).</li>" +
"<li><b>Psoriasis</b> (new or worsening). Symptoms include red scaly patches or raised bumps that are filled with pus.</li>" +
"</ul>" +
"<p></p><p></p><b>Call your doctor or get medical care right away if you develop any of the above symptoms.</b>" +
"<p></p><p></p><b>Common side effects of HUMIRA include injection site reactions</b> (redness, rash, swelling, itching, or bruising), <b>upper respiratory infections</b> (sinus infections), <b>headaches, rash,</b> and <b>nausea.</b> These are not all of the possible side effects with HUMIRA. Tell your doctor if you have any side effect that bothers you or that does not go away." +
"<p></p><p></p><span class='subheader'>Remember, tell your doctor right away if you have an infection or symptoms of an infection, including:</span>" +
"<p></p>" +
"<ul>" +
"<li>Fever, sweats, or chills</li>" +
"<li>Muscle aches</li>" +
"<li>Cough</li>" +
"<li>Shortness of breath</li>" +
"<li>Blood in phlegm</li>" +
"<li>Weight loss</li>" +
"<li>Warm, red, or painful skin or sores on your body</li>" +
"<li>Diarrhea or stomach pain</li>" +
"<li>Burning when you urinate</li>" +
"<li>Urinating more often than normal</li>" +
"<li>Feeling very tired</li>" +
"</ul>" +
"<p></p><p></p><b>HUMIRA is given by injection under the skin.</b>" +
"<p></p><p></p><span class='subheader'>This is the most important information to know about HUMIRA. For more information, talk to your health care provider.</span>" +
"<p></p><p></p><span class='subheader'>HUMIRA Use</span>" +
"<p></p><p></p>HUMIRA is a prescription medicine used to reduce signs and symptoms, and to achieve and maintain clinical remission in adults with moderate to severe Crohn's disease who have not responded well to certain other medications. HUMIRA is also used to reduce signs and symptoms and achieve clinical remission in these adults who have also lost response to or are unable to tolerate infliximab." +
"<p></p><p></p><b>You are encouraged to report negative side effects of prescription drugs to the FDA. Visit <a href='javascript:foo()' id=medwatch class=isi>www.fda.gov/medwatch</a>, or call 1-800-FDA-1088.</b>" +
"<p></p><p></p><b>If you cannot afford your medication, visit <a href='javascript:foo()' id=pparx class=isi>www.pparx.org</a> for assistance.</b>" +
"<p></p><p></p><b>Reference: 1.</b> HUMIRA Injection [package insert]. North Chicago, IL: AbbVie Inc." +
"<p></p><p></p>64Z-1864622" +
"<p></p>";
