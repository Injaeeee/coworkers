import Button, {
  ButtonBackgroundColor,
  ButtonBorderColor,
  ButtonPadding,
  ButtonStyle,
  ButtonWidth,
  TextColor,
  TextSize,
} from '@/components/common/Button/Button';
import Input from '@/components/common/Input';

function SignUpForm() {
  return (
    <form className="flex w-full flex-col gap-7 font-pretendard">
      <Input
        type="text"
        id="name-input"
        label="이름"
        placeholder="이름을 입력해주세요."
      />
      <Input
        type="email"
        id="email-input"
        label="이메일"
        placeholder="이메일을 입력해주세요."
      />
      <Input
        type="password"
        id="password-input"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        hasVisibilityButton
      />
      <Input
        type="password"
        id="password-check-input"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 한 번 입력해주세요."
        hasVisibilityButton
      />
      <Button
        buttonStyle={ButtonStyle.Box}
        textColor={TextColor.White}
        textSize={TextSize.Large}
        buttonWidth={ButtonWidth.Full}
        buttonBackgroundColor={ButtonBackgroundColor.Green}
        buttonBorderColor={ButtonBorderColor.None}
        buttonPadding={ButtonPadding.Large}
      >
        회원가입
      </Button>
    </form>
  );
}

export default SignUpForm;
