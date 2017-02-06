import mocha from 'mocha';
import chai from 'chai';
import StaticHeap from '../src/StaticHeap';

const expect = chai.expect;

describe('Heap', () => {

  it('should heapify correctly.', () => {

    let heap = new StaticHeap([
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 3, priority: 3 }
    ]);

    expect(heap.size()).equal(3);

    let max;

    max = heap.getMax();
    expect(max.value).equal(3);
    expect(max.priority).equal(3);
  });

});
