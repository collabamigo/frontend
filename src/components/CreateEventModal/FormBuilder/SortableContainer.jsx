import React from "react";
import PropTypes from "prop-types";
import generic from "./data/generic";
import {
    editPanel,
    sortableWrapper,
} from "./SortableContainer.module.css";
import {DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, closestCenter} from "@dnd-kit/core";
import {sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, arrayMove} from "@dnd-kit/sortable";
import {SortableItem} from "./SortableItem";

export default function SortableContainer({
    updateFormData,
    formData,
    editIndex,
    setEditIndex,
    setFormData,
    reset,
    currentLanguage,
}) {

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    return (
        <div className={sortableWrapper}>

            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={(e)=>{
                    console.log('drag end', e)
                    const arr = formData.map((field) => {
                        return field['name']
                    });
                    const initial = arr.indexOf(e.active.id);
                    const final = arr.indexOf(e.over.id);
                    const data = arrayMove(arr, initial, final);
                    const newData = data.reduce((previous, current) => {
                        return [
                            ...previous,
                            formData[
                                formData.findIndex(
                                    (data) => current === data.name
                                )
                                ],
                        ];
                    }, [])
                    updateFormData(newData);
                }}
                sensors={sensors}
            >
                <SortableContext
                    items={formData.map((field)=>{return field['name']})}
                    strategy={verticalListSortingStrategy}
                >
                    {formData.map((field, index) => {
                    return (
                        <SortableItem
                            currentLanguage={currentLanguage}
                            editIndex={editIndex}
                            field={field}
                            formData={formData}
                            index={index}
                            key={field.name}
                            reset={reset}
                            setEditIndex={setEditIndex}
                            setFormData={setFormData}
                            updateFormData={updateFormData}
                        />

                    );
                })}
                </SortableContext>
            </DndContext>


            {(formData || []).length > 0 && (
                <div className={editPanel}>
                    <button
                        onClick={() => {
                            if (
                                window.confirm(
                                    "Are you sure you want to delete all fields?"
                                )
                            ) {
                                updateFormData([]);
                            }
                        }}
                        style={{
                            marginRight: 15,
                        }}
                        type="button"
                    >
                        {generic.deleteAll[currentLanguage]}
                    </button>
                </div>
            )}
        </div>
    );
}

SortableContainer.defaultProps = {
    currentLanguage: "en",
    editIndex: -1,
    reset: () => { },
    setEditIndex: () => { },
    setFormData: () => { },
    updateFormData: () => { },
};

SortableContainer.propTypes = {
  currentLanguage: PropTypes.string,
  editIndex: PropTypes.number,
  formData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))).isRequired,
  reset: PropTypes.func,
  setEditIndex: PropTypes.func,
  setFormData: PropTypes.func,
  updateFormData: PropTypes.func,
};
