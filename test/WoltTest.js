web.init();
web.open('https://www.cibus-sodexo.co.il/');
web.selectFrame("/html/body/div[1]/section/div[3]/iframe");


web.type("id=txtUsr","ayala.revivo@verisoft.co" );
web.type("id=txtPas","AYALAREVIVO1!" );
web.click('id=btnLogin');
web.waitForExist("/html/body/div[1]/div[1]/div[1]/div[2]/div[1]/table/tbody/tr[1]/td[1]/a/span[3]")
const txt=web.getText("/html/body/div[1]/div[1]/div[1]/div[2]/div[1]/table/tbody/tr[1]/td[1]/a/span[3]")
const money=txt.replace(/[^\d\.]*/g, '')
const numMoney=Number(money)
// const num=numMoney-(numMoney%5)

//AA
web.open('https://wolt.com/he/discovery');
web.click('/html/body/div[5]/div/div/div/button[2]');


web.click('//*[@id="mainContent"]/div[1]/div/div[1]/header/div[2]/div[3]/div/div/button');
web.waitForExist('//*[contains(text(),"כניסה דרך גוגל")]')

web.click('//*[contains(text(),"כניסה דרך גוגל")]');

web.type("id=identifierId","ayala.revivo@verisoft.co" );

web.click('//*[@id="identifierNext"]/div/button');


web.waitForExist("name=Passwd")
//anuther Page
web.type("name=Passwd","AYALAREVIVO1!");

web.click('//*[@id="passwordNext"]/div/button');



//anuther page
web.waitForExist('//*[contains(text(),"רכישת")]')
web.click('//*[contains(text(),"רכישת")]');

const num=37-(37%5)
log.info(num)
const s='//*[contains(text(),"‫גיפט קארד - '+num+' ₪")]'
web.waitForExist(s)

web.click(s)
web.click('//*[@id="app"]/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button')
// web.click('//*[@id="app"]/div[2]/div[1]/div[2]/main/div[4]/div/div[1]/div/div/div/div[3]/div[6]/div/div/div/button[3]');


web.click('//*[@id="app"]/div[2]/div[1]/div[1]/div[1]/div/div/header/div[2]/div[3]/div/div/div/div/button');


web.waitForExist('//*[@id="app"]/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button')

web.click('//*[@id="app"]/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button');

web.waitForExist('//*[@id="mainContent"]/div[5]/div[2]/div[1]/ul[2]/li/a/div[3]')

web.click('//*[@id="mainContent"]/div[5]/div[2]/div[1]/ul[2]/li/a/div[3]');


web.click('/html/body/div[11]/div/aside/div[2]/div/div[1]/div/div[3]/button');


web.click('//*[contains(text(),"לחצו להזמנה")]');


//page connect to sibus


web.selectFrame("//*[@id='mainContent']/div[4]/iframe");

web.type("//*[@id='txtUserName']","ayala.revivo@verisoft.co");


web.type("//*[@id='txtPassword']","AYALAREVIVO1!");


web.click('id=btnSubmit');


web.click('id=btnPay');



if(web.isExist('//*[contains(text(),"יש לך מייל")]',60))
    log.info("wow");
else{
    log.info("oooof")
}
    






