import mocha from 'mocha';
import chai from 'chai';
import Heap from '../src/Heap';

const expect = chai.expect;

describe('Heap', () => {

  it('should heapify correctly.', () => {

    let heap = new Heap([
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 3, priority: 3 }
    ]);

    expect(heap.size()).equal(3);

    let max;

    max = heap.pull();
    expect(max.value).equal(3);
    expect(max.priority).equal(3);
  });

  it('getKMax() should k max items.', () => {

    let heap = new Heap([
      { value: 1, priority: 1 },
      { value: 2, priority: 2 },
      { value: 3, priority: 3 }
    ]);

    let maxes = heap.getKMax(2);

    expect(maxes.length).equal(2);
    expect(maxes[0].value).equal(3);
    expect(maxes[1].value).equal(2);
  });

});
