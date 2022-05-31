import keys from 'webdriverio/build/commands/browser/keys';
import Page from './page';

class addUserPage extends Page {
    /**
     * define selectors using getter methods
     */
    get clickOnSystemAdminstratorButton () {
        return $('#menu_admin_viewAdminModule');
    }

    get clickOnAddButton () {
        return $('#btnAdd');
    }

    get btnSubmit () { 
        return $('#btnLogin');
}
    get fillEmpName(){
        return $("//input[@id=\'systemUser_employeeName_empName\']")
    }

    get fillPassword(){
        return $("//input[@id=\'systemUser_password\']")
    }

    get confirmPassword(){
        return $("//input[@id=\"systemUser_confirmPassword\"]")
    }
    
    get savebutton(){
        return $('//input[@id="btnSave"]')
    }

    get userName(){
        return $("//input[@id='systemUser_userName']")
    }
    
    async clickOnSavebutton(){
        // const time  = await Page.virtualWait();
        // await(await this.savebutton).waitForDisplayed(this.virtualWait());
    
        await(await this.savebutton).click();
        browser.pause(3000);
       
    }

    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    async addUser(){
        await (await this.clickOnSystemAdminstratorButton).click();
        await(await this.clickOnAddButton).click();
        
    }
    async getRandomNumber(){
        const rNo = Math.floor(Math.random()* 9011);
        return rNo;
    }

    async addEmpName(empName,password,confirmPassword){
        await (await this.fillEmpName).setValue(empName);
        // await (await this.userName).setValue(user+await this.getRandomNumber());
        // await (await this.userName).setValue(user);
         await (await this.fillPassword).setValue(password)
         await (await this.confirmPassword).setValue(confirmPassword)

    }
     async addRandomUserName(user){
         await (await this.userName).setValue(user+await this.getRandomNumber());
       const element  = await $("(//input[@type='text'])[2]");
        //    const text = await (await this.userName).getValue();
       const text = await element.getValue();
           console.log("first"+text);
        // // var gg = await no.getRandomNumber();
        
        //  let userNameText =  await element.getAttribute('value');
        //  var elementContent1 = element.getText();
        // var elementValue1 = element.getAttribute("value");
        // var elementContent = this.userName.getText();
        // var elementValue = this.userName.getAttribute("value");
        // console.log("Value with element1 :"+elementContent1);
        // console.log("Value with element2 :"+elementValue1);
        // console.log("Value with userName1 :"+elementContent);
        // console.log("Value with userName2 :"+elementValue);
        return text;
           
     }
   
 
}
export default new addUserPage();