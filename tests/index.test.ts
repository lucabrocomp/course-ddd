import {TestClass} from "../src/TestClass";

describe('testing file', () => {

	test('sum of 2, 3 and 4 should be 9', () => {
		const test = new TestClass();
		expect(test.sum(2, 3, 4)).toBe(9);
	});

	test('the instance returned should be type of TestClass', () => {
		const instance = TestClass.instanceFactory();
		expect(instance).toBeInstanceOf(TestClass);
	});

	test('two TestClass instances are equals', () => {
		const instance1 = new TestClass();
		const instance2 = new TestClass();
		expect(instance1).toEqual(instance2);
	})

	test('two TestClass instances differs on the property value', () => {
		const instance1 = new TestClass();
		instance1.testProp = 2;
		const instance2 = new TestClass();
		expect(instance1).not.toEqual(instance2);
	})

});