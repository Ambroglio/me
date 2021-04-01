import {SectionType} from "../types/json_types";

function compareSectionsByOrder(sectionA : SectionType, sectionB: SectionType) {
    return sectionA.order - sectionB.order
}

export {compareSectionsByOrder}