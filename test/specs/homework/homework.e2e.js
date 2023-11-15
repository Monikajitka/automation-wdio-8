describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');

        await browser.saveScreenshot('registrace.png');})
    
    it("registration new user" , async () => {
       
        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const userName = "Aloiz Krupička";
        const email = "krupickaz@seznam.cz";
        const password = "Krupicka123";
        const passwordConfirm = await $('#password-confirm');
        const loginButton = await $('.btn-primary');


        await nameField.setValue(userName);
        
        await emailField.setValue(email);
        
        await passwordField.setValue(password);

        await passwordConfirm.setValue(password);
        
        await loginButton.click();

        await browser.pause(5000);

        

    });

});
