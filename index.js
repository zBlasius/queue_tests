
function Queue() {
  this.elements = [];

}
// Adiciona um elemento no final da fila
Queue.prototype.enqueue = function (e) {
  this.elements.push(e)
}

// Remove o primeiro elemento da fila
Queue.prototype.dequeue = function () {
  return this.elements.shift();
}

// checa se a fila está vazia
Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
}

Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements : undefined;
}

Queue.prototype.executeTask = async function () {
  while (!this.isEmpty()) {
    const promise = this.elements[0]
    const result = await promise;
    console.log('result', result)
    this.dequeue()
  }

  console.log('tasks finalizadas')
}

function testPromise(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve('teste')
    }, 2000)
  })  
}

let task = new Queue()

for (let i = 0; i < 10; i++) {
  task.enqueue(testPromise())
}

// console.log(task.peek())

task.executeTask()