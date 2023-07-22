using System.Threading;

public class Foo {

     public ManualResetEventSlim slimEvent { get; set; }
     public ManualResetEventSlim secondslimEvent { get; set; }

    public Foo() 
    {
        slimEvent = new ManualResetEventSlim(false);
        secondslimEvent = new ManualResetEventSlim(false);
    }

    public void First(Action printFirst) 
    {
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        slimEvent.Set();
    }

    public void Second(Action printSecond) 
    {
        slimEvent.Wait();
        
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        secondslimEvent.Set();
    }

    public void Third(Action printThird) 
    {
        secondslimEvent.Wait();
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
}