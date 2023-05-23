
web.transaction('01')
web.init()
// web.open('https://www.cibus-sodexo.co.il/')
// web.selectFrame("/html/body/div[1]/section/div[3]/iframe")

// web.transaction('02')

// web.type("id=txtUsr","ayala.revivo@verisoft.co" )
// web.type("id=txtPas","AYALAREVIVO1!" )
// web.click('id=btnLogin')
// web.waitForVisible("html")

// web.refresh();
// web.click('//*[@id="ctl00_lnkRound2"]')
// const txt=web.getText('span.bdg.space')
// log.info(txt)
// const money=txt.replace(/[^\d\.]*/g, '')
// const numMoney=Number(money)
// const num=numMoney-(numMoney%5)
const num=45
web.transaction('03')
web.open('https://wolt.com/he/discovery')
web.click('/html/body/div[5]/div/div/div/button[2]')


web.click('//*[@id="mainContent"]/div[1]/div/div[1]/header/div[2]/div[3]/div/div/button');

web.click('//*[contains(text(),"כניסה דרך גוגל")]')

web.type("id=identifierId","ayala.revivo@verisoft.co" )

web.click('//*[@id="identifierNext"]/div/button')


web.waitForVisible("name=Passwd")
//anuther Page
web.type("name=Passwd","AYALAREVIVO1!")

web.click('//*[@id="passwordNext"]/div/button')



//anuther page
web.waitForVisible('//*[contains(text(),"רכישת")]')
web.click('//*[contains(text(),"רכישת")]');

// const num=37-(37%5)
// log.info(num)
const s='//*[contains(text(),"‫גיפט קארד - '+num+' ₪")]'
web.waitForVisible(s)

web.click(s)
web.click('//*[@id="app"]/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button')


web.click('button.sc-eda0895a-2.gDxbyT');


web.waitForVisible('button.sc-eda0895a-2.qNZTd.sc-b10f3074-4.gXMRvG')

web.click('button.sc-eda0895a-2.qNZTd.sc-b10f3074-4.gXMRvG');
                
web.waitForVisible('a.sc-54b661ce-0.eZIuim.jS788i.M3yRnd.M3yRnd>div.agFoUI')

web.click('a.sc-54b661ce-0.eZIuim.jS788i.M3yRnd.M3yRnd>div.agFoUI');


web.click('div.sc-7cad8347-0.cAnNMw>div:nth-child(6)>button');
web.waitForVisible('div.COs4mW>div.sc-8f4f0c5f-1.bZAllL>button.sc-eda0895a-2.cFDkWm')

web.click('div.COs4mW>div.sc-8f4f0c5f-1.bZAllL>button.sc-eda0895a-2.cFDkWm');


//page connect to sibus


web.selectFrame("//*[@id='mainContent']/div[4]/iframe");

web.type("//*[@id='txtUserName']","ayala.revivo@verisoft.co");


web.type("//*[@id='txtPassword']","AYALAREVIVO1!");


web.click('id=btnSubmit');


// web.click('id=btnPay');



// if(web.isExist('//*[contains(text(),"יש לך מייל")]',60))
//     log.info("wow");
// else{
//     log.info("oooof")
// }
    





