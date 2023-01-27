import { computed } from "vue";
import type { ButtonProps } from "../Button.vue";
import { ButtonType } from "@shared/components/Button/enums/ButtonType";
import { ButtonStyle } from "@shared/components/Button/enums/ButtonStyle";

export const useButtonComputedProps = ({ type, visualStyle }: ButtonProps) => {
  const buttonType = computed(() => type || ButtonType.Button);

  const buttonClass = computed(() => {
    const style = visualStyle || [ButtonStyle.Regular];

    if (Array.isArray(visualStyle)) {
      return {
        "Button--regular": style.includes(ButtonStyle.Regular),
        "Button--error": style.includes(ButtonStyle.Error),
        "Button--warning": style.includes(ButtonStyle.Warning),
        "Button--success": style.includes(ButtonStyle.Success),
        "Button--icon": style.includes(ButtonStyle.Icon),
      };
    }

    return {
      "Button--regular": style === ButtonStyle.Regular,
      "Button--error": style === ButtonStyle.Error,
      "Button--warning": style === ButtonStyle.Warning,
      "Button--success": style === ButtonStyle.Success,
      "Button--icon": style === ButtonStyle.Icon,
    };
  });

  return { buttonType, buttonClass };
};
