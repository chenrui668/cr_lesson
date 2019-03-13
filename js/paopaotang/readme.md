- 函数有多种运行方式
    Player() 普通方式，
    new Player() 作为构造函数constructor被运行,会有返回新对象 实例
    构造函数， 当然是类
    function Presson(){ }
- 函数是一等对象，可以被执行的对象，
    this 常在 借助他来构造新的对象
    var player1 = new Preson()
    this => player1   Preson {}
- new 的过程
    this 空对象Preson {}
    Preson() 构造函数，
    this.name = name