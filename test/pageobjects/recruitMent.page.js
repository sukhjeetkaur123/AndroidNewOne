import keys from 'webdriverio/build/commands/browser/keys';
import addUserPage from './addUser.page';
import loginPage from './login.page';
import Page from './page';


class recuritMentPage extends Page{

    get clickOnSystemAdminstratorButton () { return $('#menu_admin_viewAdminModule')
    }
    get recuritmentIcon(){ return $('#menu_recruitment_viewRecruitmentModule')
    }
    get userNameForRecuritment(){ return $('#candidateSearch_candidateName')
    }
    get keyword(){ return $('#candidateSearch_keywords')
    }
    get pickDateFrom() { return $('#candidateSearch_fromDate')
    }
    get pickDateTo() { return $('//input[@id="candidateSearch_toDate"]')
    }
    get search() { return $('#btnSrch')

    }


    async clickOnSearchButton(){
        await(await this.search).waitForClickable({timeout:3000})
        await(await this.search).click();
    }
    async clickOnDateFrom(date){
         await(await this.pickDateFrom).click();
        await(await this.pickDateFrom).setValue(date);
    }

    async clickOnDateTo(date){
        await(await this.pickDateTo).click();
        await(await this.pickDateTo).setValue(date);
       ;
    }

    async clickOnRecuritmentButton(){
        await(await this.recuritmentIcon).waitForClickable({timeout:3000});
        await(await this.recuritmentIcon).click();
    }
    async addUser(){
        await (await this.clickOnSystemAdminstratorButton).click();
        await(await this.clickOnAddButton).click();
        
    }

    async selectJobTitle(){
        const selectValue = await $('#candidateSearch_jobTitle');
        await selectValue.selectByVisibleText('Engineer');
    }

    async addRandomUserName(user){
        await (await this.userNameForRecuritment).setValue(user+await addUserPage.getRandomNumber());
    }

    async selectStatus(status){
        const selectStatus = await $('#candidateSearch_status');
        await selectStatus.selectByVisibleText(status)
    }

    async enterValueKeywordField(value){
        await(await this.keyword).setValue(value);
    }

    async selectMethodOfApplication(mode){
        const selectMethod = await $('#candidateSearch_modeOfApplication');
        await selectMethod.selectByVisibleText(mode);
    }

}
export default new recuritMentPage();