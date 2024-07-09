<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	data() {
		return {
			count: 1,
		}
	},
})
</script>

<template>
	<div class="glo-question">
		<div class="container">
			<div class="kt-portlet">
				<div class="kt-portlet__body">
					<template v-for="i in 10" :key="i">
						<div class="form-group validated">
							<label class="form-control-label question-title required"> {{ i }}. จงเลือกคำตอบที่ถูกต้อง </label>
							<div class="kt-radio-list pt-1 ml-1">
								<label v-for="j in 4" class="kt-radio" :key="j">
									<input type="radio" :name="`radio-choice-${i}`" /> ตัวเลือกที่
									{{ j }}
									<span></span>
								</label>
							</div>
							<!-- <div class="invalid-feedback">Success! You've done it.</div> -->
							<!-- <span class="form-text text-muted">Example help text that remains unchanged.</span> -->
						</div>
					</template>
				</div>
			</div>

			<div class="kt-portlet">
				<div class="kt-portlet__body">
					<template v-for="i in 10" :key="i">
						<div class="form-group validated">
							<label class="form-control-label question-title required"> {{ i }}. จงเลือกคำตอบที่ถูกต้อง </label>
							<div class="kt-checkbox-list pt-1 ml-1">
								<label v-for="j in 4" class="kt-checkbox kt-checkbox--bold" :key="j">
									<input type="checkbox" :name="`checkbox-choice-${i}`" />
									ตัวเลือกที่
									{{ j }}
									<span></span>
								</label>
							</div>
							<!-- <div class="invalid-feedback">Success! You've done it.</div> -->
							<!-- <span class="form-text text-muted">Example help text that remains unchanged.</span> -->
						</div>
					</template>
				</div>
			</div>

			<div class="kt-portlet">
				<div class="kt-portlet__body">
					<template v-for="i in 10" :key="i">
						<div class="form-group row validated">
							<label class="form-control-label question-title required"> {{ i }}. จงอธิบายเกี่ยวกับ ... </label>
							<input
								style="margin: 12px 0 0 12px"
								type="text"
								class="form-control form-control-sm"
								placeholder="ระบุคำตอบ"
							/>
							<!-- <div class="invalid-feedback">Success! You've done it.</div> -->
							<!-- <span class="form-text text-muted">Example help text that remains unchanged.</span> -->
						</div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>
