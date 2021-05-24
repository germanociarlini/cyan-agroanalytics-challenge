import { render } from "@testing-library/react";
import { CollectionContext } from "../../../Contexts";
import SaveModal from "../SaveModal";

describe("Tests with rendering SaveModal", () => {
  const renderSaveModal = (
    collection = { collection: { name: "DummyCollection" } },
    onSave,
    onOverwrite
  ) => {
    return render(
      <CollectionContext.Provider value={collection}>
        <SaveModal />
      </CollectionContext.Provider>
    );
  };

  it("Should render the component", () => {
    const { queryByTitle } = renderSaveModal();
    const saveModalContent = queryByTitle("saveModalContent");
    const saveModalHeader = queryByTitle("saveModalHeader");
    expect(saveModalContent).toBeTruthy();
    expect(saveModalHeader).toBeTruthy();
  });

  it("Should have initialized the input with the collection name", () => {
    const { queryByTitle } = renderSaveModal();
    const saveModalInput = queryByTitle("saveModalInput");
    expect(saveModalInput.value).toBe("DummyCollection");
  });

  it("Should not render the Overwrite button when a collection is not loaded", () => {
    const { queryByTitle } = renderSaveModal({ collection: null });
    const overwriteButton = queryByTitle("saveModalOverwriteButton");
    expect(overwriteButton).toBeFalsy();
  });

  it("Should render the SaveAs button even if a collection is not loaded", () => {
    const { queryByTitle } = renderSaveModal({ collection: null });
    const saveAsButton = queryByTitle("saveModalSaveAsButton");
    expect(saveAsButton).toBeTruthy();
  });
});
