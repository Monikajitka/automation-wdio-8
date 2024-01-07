describe('Homework', async () => {

   

   beforeEach('should open page', async () => {

    await browser.reloadSession();

    await browser.url('/registrace');})
    
    it("registration new user" , async () => {
       
        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const userName = "Aloiz Krupička";
        const email = "krupickaqA@seznam.cz";
        const password = "Krupicka123";
        const passwordConfirm = await $('#password-confirm');
        const loginButton = await $('.btn-primary');
        const checkLogin = $('[class="dropdown-toggle"]');
       


        await nameField.setValue(userName);
        
        await emailField.setValue(email);
        
        await passwordField.setValue(password);

        await passwordConfirm.setValue(password);
        
        await loginButton.click();

        await browser.pause(1000);

        await expect(await checkLogin.getText()).toEqual("Aloiz Krupička");

    });
    
    
        
     
    it("registration with exist email" , async () => {
       
        const nameField = await $("#name");
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const userName1 = "Linecké Cukroví";
        const email = "krupickaqA@seznam.cz";
        const password = "Krupice123";
        const passwordConfirm = await $('#password-confirm');
        const loginButton = await $('.btn-primary');
        const toastMessage = $('.toast-message');
        const invalidFeedback = $('.invalid-feedback');
        
    
        
        await nameField.setValue(userName1);
        
        await emailField.setValue(email);
        
        await passwordField.setValue(password);

        await passwordConfirm.setValue(password);
        
        await loginButton.click();

        await browser.pause(1000);

        
        await expect(await toastMessage.getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
        await expect(await invalidFeedback.getText()).toEqual('Účet s tímto emailem již existuje');
        

        });
            

    it("registration with invalid password" , async () => {
       
        const nameField = await $('#name');
        const emailField = await $('#email');
        const passwordField = await $('#password');
        const userName = "Kokosové Řezy";
        const email = "kokosy@email.com";
        const password = "123456";
        const passwordConfirm = await $('#password-confirm');
        const loginButton = await $('.btn-primary');
        const toastMessage = $('.toast-message');
        const invalidFeedback = $('.invalid-feedback');
        
        
       
        
        await nameField.setValue(userName);
                
        await emailField.setValue(email);
                
        await passwordField.setValue(password);
        
        await passwordConfirm.setValue(password);
                
        await loginButton.click();
        
        await browser.pause(1000);
    
        await expect(await toastMessage.getText()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
        await expect(await invalidFeedback.getText()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
    
    
    });

       
        

    

    });
