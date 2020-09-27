import MainLayout from "@viewLayouts/main.vue";

describe("@viewLayouts/main.vue", () => {
  it("renders its content", () => {
    const slotContent = "<p>Hello!</p>";
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
