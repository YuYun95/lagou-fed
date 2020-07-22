// abstract 抽象类

export {} // 确保跟其他示例没有成员冲突

abstract class Animal {
  eat (food: string): void {
    console.log(`呼噜呼噜地吃：${food}`)
  }

  abstract run (distance: number): void // 抽象方法
}

class Dog extends Animal {
  run (distance: number): void {
    console.log('四脚爬行', distance)
  }
}

const d = new Dog()
d.eat('草')
d.run(100)
