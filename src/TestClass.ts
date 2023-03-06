export class TestClass {

	testProp: number = 0;

	public sum(...addends: Array<number>): number {
		return addends.reduce((acc: number, addend: number) => acc+addend, 0);
	}
	static instanceFactory(): TestClass {
		return new TestClass()
	}
}