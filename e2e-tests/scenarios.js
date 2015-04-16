'use strict';


describe('ToDo', function(){

  it('should automatically redirect to index.html when location hash/fragment is empty', function(){
    browser.get('index.html');
      expect(browser.getLocationAbsUrl()).toMatch("index.html");
  });

  beforeEach(function(){
   // browser.get('index.html');
  })



  it('should add a new task to the list box', function(){
    element(by.model('newTask')).sendKeys('Watch a Movie');
    var today = new Date();
    var dd = today.getDate()+1;
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();
    var t = mm+"/"+dd+"/"+yy;
    element(by.model('newTaskDate')).sendKeys(t);
    element(by.css('option[value="1"]')).click();
    element(by.linkText("ADD TASK")).click();
    var text = element.all(by.css("p label.susan")).last().getText();
    expect(text).toMatch("Watch a Movie");                                                                              
  }); 

   it('should delete a task to the list box', function(){
    element(by.css("label[for='Watch Furious']")).click();
    element(by.linkText("DELETE SELECTED TASK")).click();
    var text = element(by.css("p label.susan")).getText();
    expect(text).toMatch("Build a Todo App");                                                                              
  });

  it('alert the user to input date', function(){
    element(by.model('newTaskDate')).sendKeys('');
  });

 

  });

