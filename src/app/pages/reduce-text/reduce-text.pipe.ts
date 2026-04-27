import {HttpTestin  } from "";


describe('ReduceTextPipe', () => {
  let pipe: ReduceTextPipe;
  beforeEach(() => {
    pipe = new ReduceTextPipe();
 });

    it ('should create ', () => {
      expect(pipe).toBeTruthy();
    });

    it ('true transform correctly',() => {
      const text = 'Hello this is a test to check the pipe';
      const newText = pipe.transform(text,5);
      expect (newText.length).toBe (5)  
      });
  });
