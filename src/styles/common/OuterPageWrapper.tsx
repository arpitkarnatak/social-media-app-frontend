import { PropsWithChildren } from "react";
import { MaxWidthWrapper, OuterPageWrapperStyle } from ".";

export function OuterPageWrapper({ children }: PropsWithChildren) {
  return (
    <OuterPageWrapperStyle>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </OuterPageWrapperStyle>
  );
}
