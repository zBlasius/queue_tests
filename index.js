
function Queue(){
  this.elements = [];

}
// Adiciona um elemento no final da fila
Queue.prototype.enqueue = function(e) {
  this.elements.push(e)
}

// Remove o primeiro elemento da fila
Queue.prototype.dequeue = function() {
  return this.elements.shift();
}

// checa se a fila está vazia
Queue.prototype.isEmpty = function() {
  return this.elements.length == 0;
}

Queue.prototype.peek = function() {
  return !this.isEmpty() ? this.elements[0] : undefined;
}

Queue.prototype.executeTask = function(){
  while(!this.isEmpty()){
    console.log(`Executando task: ${11 - this.elements.length}. o Valor da task é ${this.elements}`)
    this.dequeue();
  }

  console.log('tasks finalizadas')
}

let task = new Queue()

for (let i = 0; i < 10; i++) {
  task.enqueue(i)
}

task.executeTask()