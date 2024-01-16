
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
  return !this.isEmpty() ? this.elements : undefined;
}

let task = new Queue()

for (let i = 0; i < 10; i++) {
  task.enqueue(i)
}

console.log('task ->', task.peek())
task.dequeue()
console.log('task ->', task.peek())
console.log('task ->', task.enqueue(100))
console.log('task ->', task.peek())